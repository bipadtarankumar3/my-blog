import bcrypt from "bcrypt";
import sequelize from "../db/postgres.js";
import User from "../db/models/User.js";

(async () => {
  await sequelize.sync();

  const password = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@test.com",
    password,
    role: "admin"
  });

  console.log("✅ Admin user created");
  process.exit();
})();
