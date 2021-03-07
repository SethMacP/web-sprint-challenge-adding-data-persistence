
exports.seed = async function(knex) {
  await knex('resources').insert([
    { resource_name:"Project A1",
      resource_description:"1 Description",
    },
    { resource_name:"Project B2",
      resource_description:"2 Description",
    },
    { resource_name:"Project C3",
      resource_description:"3 Description",
    },
    { resource_name:"Project D4",
      resource_description:"4 Description",
    },
  ])
};
