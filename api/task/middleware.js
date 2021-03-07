const model = require('./model')
const projectModel = require('../project/model')

const checkDescription = () => async(req,res,next)=>{
    console.log('1')
    if(!req.body.task_description){
        return res.status(400).json({message:'Include a task_description'})
    }
    next();
}
const checkProjectID = () => async(req,res,next)=>{
    console.log('2')
    console.log('params', req.params.id)
    const dataCheck = await projectModel.getProjectsByID(req.body.project_id)
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