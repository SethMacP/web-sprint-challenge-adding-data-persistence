// build your `Task` model here


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
        console.log(tasks)
        //return a map function that returns each object with the boolean converted
            return tasks.map( thing => {
                    console.log('this task', thing.task_completed)
                return {   
                    ...thing,
                    task_completed: (thing.task_completed == 0 ? false : true)
                }
            })
        
        // return tasks
}
const getTaskByID = async(task_id)=>{
    const data = await db('Tasks as t')
        .where("task_id", task_id)
        .first()
        .innerJoin('projects as p', "t.project_id", "p.project_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name"
        )
    console.log(data)
    if(data){
        return{...data,
            task_completed: (data.task_completed == 0 ? false : true)
        }
    }
    return data;
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