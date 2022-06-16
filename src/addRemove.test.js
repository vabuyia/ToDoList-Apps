const {add, myTasks } = require('./addRemove.js');


test('add test', () => {
  expect(add('task 1')).toEqual(myTasks());


})