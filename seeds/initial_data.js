
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('everything_else').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('everything_else').insert({id: 1, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-10-19 10:23:54'}),
        knex('everything_else').insert({id: 2, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-10-26 10:23:54'}),
        knex('everything_else').insert({id: 3, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-10-31 17:23:54'}),
        knex('everything_else').insert({id: 4, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-11-12 01:28:54'}),
        knex('everything_else').insert({id: 5, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-11-17 10:23:54'}),
        knex('everything_else').insert({id: 6, task: 'Replaced Dexcom Sensor', task_id: 1, timeStamp: '2015-11-19 18:27:54'}),
        knex('everything_else').insert({id: 7, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-14 10:23:54'}),
        knex('everything_else').insert({id: 8, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-19 10:23:54'}),
        knex('everything_else').insert({id: 9, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-21 12:23:54'}),
        knex('everything_else').insert({id: 10, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-23 01:23:54'}),
        knex('everything_else').insert({id: 11, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-26 20:23:54'}),
        knex('everything_else').insert({id: 12, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-10-29 14:23:54'}),
        knex('everything_else').insert({id: 13, task: 'Replaced OmniPod Pod', task_id: 2, timeStamp: '2015-11-01 10:23:54'}),
        knex('everything_else').insert({id: 14, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2015-10-19 10:23:54'}),
        knex('everything_else').insert({id: 15, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2015-11-03 00:23:54'}),
        knex('everything_else').insert({id: 16, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2015-11-29 06:23:54'}),
        knex('everything_else').insert({id: 17, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2015-12-24 08:30:54'}),
        knex('everything_else').insert({id: 18, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2016-01-19 10:16:54'}),
        knex('everything_else').insert({id: 19, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2016-02-14 08:23:54'}),
        knex('everything_else').insert({id: 20, task: 'Insulin Out of the Fridge', task_id: 3, timeStamp: '2016-03-29 01:23:54'})
      ]);
    });
};
