const express = require("express");
const studentRouter = require("../students/students.router");

const apiRouter = express.Router();


apiRouter.use("/student", studentRouter);


module.exports = apiRouter