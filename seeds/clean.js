
exports.seed = async function(knex) {
  await knex('Project_Resources').truncate();
  await knex('Tasks').truncate();
  await knex('Resources').truncate();
  await knex('Projects').truncate();
};
