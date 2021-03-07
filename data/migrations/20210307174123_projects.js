
exports.up = async function(knex) {
  await knex.schema.createTable("Projects", (table)=>{
      table.increments('project_id')
      table.text('project_name').notNull()
      table.text('project_description')
      table.integer('project_completed').defaultTo(0).notNull()
  })
  await knex.schema.createTable("Resources", (table)=>{
    table.increments("resource_id")
    table.text('resource_name').notNull().unique()
    table.text('resource_description')
  })
  await knex.schema.createTable("Tasks", (table)=>{
    table.increments("task_id")
    table.text("task_description").notNull()
    table.text('task_notes')
    table.integer('task_completed').notNull().defaultTo(0)
    table.integer('project_id').notNull().references('project_id').inTable('Projects')
  })
  await knex.schema.createTable("Projects_Resources", (table)=>{
    table.integer('project_id').notNull().references('project_id').inTable('Projects')
    table.integer('resource_id').notNull().references('resource_id').inTable('Resources')

  })
};

exports.down = async function(knex) {
  //Opposite Order : Roof before floor.
  await knex.schema.dropTableIfExists("Projects_Resources");
  await knex.schema.dropTableIfExists("Tasks");
  await knex.schema.dropTableIfExists("Resources");
  await knex.schema.dropTableIfExists("Projects");
};
