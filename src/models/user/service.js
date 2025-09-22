const User = require("./model");

/**
 *
 * @param {Object} args - arguments for pagination and filtering
 * @param {number} args.page - current page number (1-based)
 * @param { number} args.limit - number of items per page
 * @param {string} args.filter - search string (matches firstName, lastName, email, department)
 * @returns
 */

async function getUsers({ page = 1, limit = 10, filter = "" }) {
  const query = filter
    ? {
        $or: [
          { firstName: new RegExp(filter, i) },
          { lastName: new RegExp(filter, "i") },
          { email: new RegExp(filter, "i") },
          { department: new RegExp(filter, "i") },
        ],
      }
    : {};

  const skip = (page - 1) * limit;

  const [items, totalCount] = await Promise.all([
    User.find(query).skip(skip).limit(limit).lean(),
    User.countDocuments(query),
  ]);

  //   const mappedItems = items.map((user) => ({
  //     ...user,
  //     id: user._id.toString(),
  //   }));

  return { items, totalCount };
}

async function getUserById(id) {
  return User.findById(id).lean(); //here i have removed lean which use to bypass my __id issue
}

async function createUser(input) {
  const { id, _id, ...cleanInput } = input;
  const user = new User(cleanInput);
  return user.save();
}

async function updateUser(id, input) {
  return User.findByIdAndUpdate(id, input, { new: true }).lean();
}

async function deleteUser(id) {
  const result = await User.findByIdAndDelete(id);
  return !!result;
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
