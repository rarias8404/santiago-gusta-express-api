const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.get("/", (req, res) => {
  return res.status(200).json("It works");
});

const PORT = dotenv.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend server is running on port: ${PORT}`);
});
