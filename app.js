require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// db connection
require("./src/database/db.js");

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// routes
const router = require("./src/routers/router");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});