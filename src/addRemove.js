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
};

module.exports = {
  add, tasks, removeItemAt, clearDiv, changeInput,
};