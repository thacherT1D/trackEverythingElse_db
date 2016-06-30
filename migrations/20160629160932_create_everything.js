
exports.up = function(knex, Promise) {
  return knex.schema.createTable('everything_else', function(table) {
    table.increments();
    table.string('task');
    table.integer('task_id');
    table.timestamp('timeStamp');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('everything_else');
};
