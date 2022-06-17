const { completeThis, clearComplete } = require('./completeTasks.js');

const tasks = [{ description: 'task', completed: true }, { description: 'task', completed: false }];

describe('test for completed status', () => {
  test('completeThis', () => {
    expect(completeThis(tasks[0].completed)).toBeTruthy();
  });

  test('completeThis', () => {
    expect(completeThis(tasks[1].completed)).toBeFalsy();
  });

  test('clearComplete', () => {
    expect(clearComplete()).toBe(1);
  });
});
