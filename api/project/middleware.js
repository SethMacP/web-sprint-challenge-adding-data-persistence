const model = require('./model');

const checkProjectRequirements = () => (req,res,next)=>{
    console.log('name', req.body)
    
        if(!req.body.project_name ){
            res.status(400).json({message:"Missing name"})
        }
        next();
    }

// const checkProjectRequirements = () => async(req, res ,next)=>{
//     try{
        
//     }catch(err){
//         next(err)
//     }
// }

module.exports = {
    checkProjectRequirements,
}