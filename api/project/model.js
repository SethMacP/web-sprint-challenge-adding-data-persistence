const db = require('../../data/dbConfig');

const getProjects = async()=>{
    return await db('Projects');
}
const getProjectsByID = async(project_id)=>{
    return await db('Projects').where("project_id", project_id)
}
const insertProject = async(newItem)=>{
    const insertItem = await db.insert({
        project_name: newItem.project_name,
        project_description: newItem.project_description,
        project_completed: (newItem.project_completed === true ? 1 : 0)
    }).into("Projects")
    console.log('insertItem', insertItem);
    
    return getProjectsByID(insertItem);
    
    
}

module.exports={
    getProjects,
    getProjectsByID,
    insertProject
}