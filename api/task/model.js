// build your `Task` model here
//MVP MET

// build your `Resource` model here
const db = require('../../data/dbConfig');

const getTasks = async()=>{
    const tasks = await db('Tasks as t')
        .leftJoin('projects as p', "t.project_id", "p.project_id")
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        return tasks
}
const getTaskByID = async(task_id)=>{
    return await db('Tasks').where("task_id", task_id)
}
const insertTask = async(newItem)=>{
    const post = await db.insert({
        task_description: newItem.task_description,
        task_notes: newItem.task_notes,
        task_completed: newItem.task_completed,
        project_id: newItem.project_id
    }).into('Tasks')
    console.log(post);
    
    return getTaskByID(post);
}

module.exports={
    getTasks,
    getTaskByID,
    insertTask
}