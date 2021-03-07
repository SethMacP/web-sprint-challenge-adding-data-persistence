
exports.seed = async function(knex) {
  await knex('tasks').insert([
    { task_description:"Task A1.A",
      task_notes:"A1.A Task Description",
      task_completed: 0,
      project_id: 1
    },
    { task_description:"Task A1.B",
      task_notes:"A1.B Task Description",
      task_completed: 0,
      project_id: 1
    },
    { task_description:"Task B2",
      task_notes:"2 Task Description",
      task_completed: 1,
      project_id: 2
    },
    { task_description:"Task C3",
      task_notes:"3 Task Description",
      task_completed: 0,
      project_id: 3
    },
    { task_description:"Task D4.A",
      task_notes:"4 Task Description",
      task_completed: 1,
      project_id: 4
    },
    { task_description:"Task D4.B",
      task_notes:"1 Task Description",
      task_completed: 0,
      project_id: 4
    },
  ])
};
