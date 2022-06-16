const { completeThis, clearComplete } = require('./completeTasks.js');

test('completeThis', (element) => {
  expect(completeThis(completed)).toEqual(tasks);
});
