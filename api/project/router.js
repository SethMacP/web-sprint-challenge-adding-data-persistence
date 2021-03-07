// build your `/api/projects` router here
// build your `/api/resources` router here
const express = require('express')
const model = require('./model')
const router = express.Router();

router.get('/' , async ( req , res , next ) => {
    try{
        const results = await model.getProjects()
        res.status(200).json(results)
    }catch(err){
        next(err)
    }

})
router.get('/:id', async(req,res,next)=>{
    try{
        const results = await model.getProjectsByID(req.params.id)
        res.status(200).json(results)
    }catch(err){
        next(err);
    }
})
router.post('/' , async ( req , res , next ) => {
    try{
        const data = await model.insertProject(req.body)
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
})

module.exports = router;