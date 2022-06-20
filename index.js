// Initialise the app as an express app
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

// Import the database
const database = require("./models");

// Import all routes
const authRoute = require("./routes/Auth");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);

// Configure sequelize to sync all models and create corresponding tables accordingly
database.sequelize.sync().then(() => {
  console.log("Db connection successful");
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Backend server is listening at port 8000`);
  });
});
