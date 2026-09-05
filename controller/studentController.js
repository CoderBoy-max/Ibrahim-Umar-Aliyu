const studentModel = require('./studentModel')

//CREATE STUDENT
const createStudent = async (req, res) => {
    try{
        const {name, RegistrationNumber, password} = req.body;
        const user = await studentModel.create({name, RegistrationNumber, password});
        res.status(201).json({
            message: 'Student added Successfully',
            data:  user
        });
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

//UPDATE STUDENT
const updateStudent = async (req, res) =>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const update = await studentModel.findByIdAndUpdate(id, {name})
        res.status(200).json({
            message: 'Student Updated Successfully',
            data: update
        })
    } catch (error){
        res.status(500).json({message: error.message})

    }
}

// DELETE STUDENT ACCOUNT
const deleteStudent = async (req, res) =>{
    try{
        const {id} = req.params;
        const deleteStudent = await studentModel.findByIdAndDelete (id);
        return res.status(200).json({
            message: 'User Deleted Successfully',
            data: deleteStudent
        });
    }catch (error){
        res.status(500).json({
            message: error.message
        })
    }
}
// GET STUDENT
const getStudent = async (req, res) =>{
    try{
        const {id} = req.params;
        const getStudent = await userModel.findById(id);
        if(!getStudent){
            return res.status(404).json({
                message: 'Student Not Found'
            })
        }
        res.status(200).json({
            message: 'Student Found',
            data: getStudent
        })

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {createStudent, updateStudent, deleteStudent, getStudent};