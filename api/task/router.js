// build your `/api/tasks` router here
// build your `/api/resources` router here
const express = require('express');
const { checkDescription, checkProjectID } = require('./middleware');
const model = require('./model')
const router = express.Router();

router.get('/' , async ( req , res , next ) => {
    try{
        const data = await model.getTasks();
        res.status(200).json(data);
    }catch(err){
        next(err)
    }
})
router.get('/:id', async(req,res,next)=>{
    try{
        const results = await model.getTaskByID(req.params.id)
        res.status(200).json(results)
    }catch(err){
        next(err);
    }
})
router.post('/' , checkDescription(), checkProjectID(), async ( req , res , next ) => {
    try{
        const data = await model.insertTask(req.body)
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
})

module.exports = router;