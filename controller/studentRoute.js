import express from 'express';
import { createStudent, updateStudent, deleteStudent, getStudent } from './studentController.js';

const studentRoute = express.Router();

studentRoute.post ('/addStudent', createStudent);
studentRoute.put('/updateStudent/:id', updateStudent);
studentRoute.delete('/deleteStudent/:id', deleteStudent);
studentRoute.get('/student/:id', getStudent);

export default studentRoute;