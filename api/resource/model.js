//MVP MET

// build your `Resource` model here
const db = require('../../data/dbConfig');

const getResources = async()=>{
    return await db('resources');
}
const getResourcesByID = async(resource_id)=>{
    const data =  await db('resources').where("resource_id", resource_id).first()
    return data;
}
const insertResource = async(newItem)=>{
    const post = await db.insert({
        resource_name: newItem.resource_name,
        resource_description: newItem.resource_description,
    }).into('resources')
    // console.log(post
    
    return getResourcesByID(post);
}

module.exports={
    getResources,
    getResourcesByID,
    insertResource
}