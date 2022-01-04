const studentData = require("../data/mockData.json");

const getStudent = (req, res) => {
    res.status(200).json(studentData);
}

const addNewStudent = (req, res) => {

    const newStudent = {
        id: studentData.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    studentData.push(newStudent);
    res.json(newStudent)
}

const editStudent = (req, res) => {
    const id = +req.params.id;

    const updateStudent = {
        id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    };

    const studentUpdate = studentData.findIndex((std) => std.id === id);
    if (studentUpdate >= 0) {
        studentData[studentUpdate] = updateStudent;
        res.status(201).json(updateStudent);
    } else {
        res.sendStatus(404);
    }
}

const removeStudent = (req, res) => {
    const id = +req.params.id;

    const studentDelete = studentData.findIndex((std) => std.id === id);

    if (studentDelete >= 0) {
        res.status(200).json(studentData[studentDelete]);

        studentData.splice(studentDelete, 1);
    } else {
        res.sendStatus(404);
    }
}

module.exports = { getStudent, addNewStudent, editStudent, removeStudent };