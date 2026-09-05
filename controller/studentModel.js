import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    RegistrationNumber: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

const studentModel = mongoose.model('student', userSchema);

export default studentModel;