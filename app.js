const express = require("express");
const app = express();

// Define a simple route for GET /
app.get("/", (req, res) => {
  res.send("Hello and welcome to Adfrem Limited Consulting Company. This is our simple web application for Azure DevOps CI!");
});

// Export the app so tests can use it
module.exports = app;
