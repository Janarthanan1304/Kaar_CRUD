const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const taskRoutes = require("./api/routes");

const db = process.env.mongo_uri;

app.use(express.json());
app.use("/", taskRoutes);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db);
  console.log("MongoDB is Connected");
}

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
