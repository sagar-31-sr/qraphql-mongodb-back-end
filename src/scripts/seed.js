require("dotenv")
  .config
  //     {
  //   path: require("path").resolve(__dirname, "../../.env"),
  // }
  ();

const connectDB = require("./../db/connection");
const User = require("../models/user/model");
console.log("lodded:", process.env.MONGO_URI);

const sampleUsers = [
  {
    firstName: "Akash",
    lastName: "Akash",
    email: "akash@gmail.com",
    role: "Manager",
    phone: "+91 9874639329",
    address: {
      street: "behind pps filed",
      city: "Chitradurga",
      state: "Karnataka",
      country: "INDIA",
      zip: "577502",
    },
    bio: "Is a manger at the kallina kote company where he building a high performing team and delivering projects",
    department: "Engineering",
    position: "Manger",
    dateOfBirth: new Date("1999-07-12"),
  },
  {
    firstName: "Abhi",
    lastName: "Pratham",
    email: "Abhi.pratham@gmail.com",
    role: "Team Lead",
    phone: "+91 9874639123",
    address: {
      street: "sangoli rayanna road",
      city: "Belgavi",
      state: "Karnataka",
      country: "INDIA",
      zip: "577412",
    },
    bio: "Is a Team lead at the kallina kote company where he working in a high performing team and delivering projects",
    department: "Engineering",
    position: "Team lead",
    dateOfBirth: new Date("2000-07-12"),
  },
];

async function seed() {
  try {
    await connectDB(process.env.MONGO_URI);
    await User.deleteMany({});
    await User.insertMany(sampleUsers);
    console.log("✅ Database seeded with sample users");
    process.exit(0);
  } catch (err) {
    console.log("❌ Seeding error", err.message);
    process.exit(1);
  }
}

seed();
