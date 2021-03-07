const model = require('./model')
const projectModel = require('../project/model')

const checkDescription = () => (req,res,next)=>{
    if(!req.body.task_description){
        return res.status(400).json({message:'Include a task_description'})
    }
}
const checkProjectID = () => async(req,res,next)=>{
    const dataCheck = await projectModel.getProjectsByID(req.params.id)
    console.log(dataCheck)
    if(!dataCheck){
        res.status(404).json({message:"Project_ID not found"})
    }
    next();
}

module.exports = {
    checkDescription,
    checkProjectID
}