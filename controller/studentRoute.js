const express = require('express');
const studentRoute = express.Router();

const {createStudent, updateStudent, deleteStudent, getStudent} = require ('./studentController');

studentRoute.post ('/addStudent', createStudent);
studentRoute.put('/updateStudent/:id', updateStudent);
studentRoute.delete('/deleteStudent/:id', deleteStudent);
studentRoute.get('/student/:id', getStudent);

module.exports = studentRoute