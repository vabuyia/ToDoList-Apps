// eslint-disable-next-line import/no-cycle
// const { generateList, saveDataLocally } = require('./index.js');

// const myTasks  = require('./index.js');

const tasks = [];
function myTasks() {
  return tasks;
}

const add = (textInputValue) => {
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: tasks.length + 1,
  };

  const addedItem = TaskItem;
  tasks.push(addedItem);
  // saveDataLocally(myTasks());
  return tasks;
};

const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const removeItemAt = (index) => {
  if (index > tasks.length) {
    return null;
  }
  tasks.splice(index - 1, 1);
  return tasks;
};

const changeInput = (newDescription, elementIndex) => {
  if (elementIndex > tasks.length) {
    return null;
  }
  tasks.map((task) => {
    if (task.index === elementIndex) {
      return {
        index: task.index, description: newDescription, complete: task.complete,
      };
    }
    return task;
  });
  return myTasks();
  // saveDataLocally(myTasks());
};

module.exports = {
  add, tasks, removeItemAt, clearDiv, changeInput,
};