//resources
//mvp met

// build your `/api/resources` router here
const express = require('express')
const model = require('./model')
const router = express.Router();

router.get('/' , async ( req , res , next ) => {
    try{
        const data = await model.getResources();
        res.status(200).json(data)
    
    }catch(err){
        next(err);
    }
})
router.post('/' , async ( req , res , next ) => {
    try{
        const data = await model.insertResource(req.body)
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
})
module.exports = router;