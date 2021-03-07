const db = require('../../data/dbConfig');

const getProjects = async()=>{
    const projects =  await db('Projects');
    console.log(projects)
        //return a map function that returns each object with the boolean converted
            return projects.map( thing => {
                    console.log('this project', thing.project_completed)
                return {   
                    ...thing,
                    project_completed: (thing.project_completed == 0 ? false : true)
                }
            })
        
        // return projects
}
const getProjectsByID = async(project_id)=>{
    const data =  await db('Projects').where("project_id", project_id).first()
    if(data){
        return{...data,
            // project_id: data.project_id,
            // project_name:data.project_name,
            // project_description: data.project_description,
            project_completed: (data.project_completed == 0 ? false : true)
        }
    }
    return data;
}
const insertProject = async(newItem)=>{
    const insertItem = await db.insert({
        project_name: newItem.project_name,
        project_description: newItem.project_description,
        project_completed: (newItem.project_completed === true ? 1 : 0)
    }).into("Projects")
   return getProjectsByID(insertItem);  
}

module.exports={
    getProjects,
    getProjectsByID,
    insertProject
}