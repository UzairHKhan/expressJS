const express = require("express");
const { getStudent, addNewStudent, editStudent, removeStudent } = require("./students.controlar");

const studentRouter = express.Router();

studentRouter.route("/")
    .get(getStudent)
    .post(addNewStudent)
studentRouter.route("/:id")
    .put(editStudent)
    .delete(removeStudent)

module.exports = studentRouter