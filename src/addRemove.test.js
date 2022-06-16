const {
  add, tasks, removeItemAt, changeInput,
} = require('./addRemove.js');

describe('tasks', () => {
  test('add test', () => {
    expect(add('task 1')).toEqual(tasks);
  });

  test('add test', () => {
    expect(add('task 2')).toEqual(tasks);
  });

  test('add test', () => {
    expect(add('task 3')).toEqual(tasks);
  });

  test('add test', () => {
    expect(add('task 4')).toEqual(tasks);
  });

  test('removeItemAt test', () => {
    expect(removeItemAt(1)).toEqual(tasks);
  });

  test('changeInput test', () => {
    expect(changeInput('updatedInput', 3)).toEqual(tasks);
  });
});