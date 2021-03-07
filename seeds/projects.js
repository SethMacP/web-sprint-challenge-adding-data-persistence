
exports.seed = async function(knex) {
  await knex('projects').insert([
    { project_name:"Project A1",
      project_description:"1 Description",
      project_completed: 0
    },
    { project_name:"Project B2",
      project_description:"2 Description",
      project_completed: 0
    },
    { project_name:"Project C3",
      project_description:"3 Description",
      project_completed: 0
    },
    { project_name:"Project D4",
      project_description:"4 Description",
      project_completed: 1
    },
  ])
};
