const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "User" },
    phone: String,
    address: AddressSchema,
    bio: String,
    position: String,
    dateOfBirth: Date,
  },
  { timestamps: true }
);

// UserSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: (doc, ret) => {
//     ret.id = ret._id.toString();
//     delete ret._id;
//   }, //for _id issue
// });

module.exports = mongoose.model("User", UserSchema);
