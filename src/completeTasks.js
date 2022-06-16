// eslint-disable-next-line import/no-cycle
//import { tasks, saveDataLocally } from './index.js'
// eslint-disable-next-line import/no-cycle
import { removeItemAt } from './addRemove.js';

const tasks = [];

const completeThis = (element) => {

  //const nextInput = element.nextSibling;
  //const elementIndex = element.getAttribute('index');
  //const isComplete = tasks[elementIndex - 1].completed;
  //nextInput.classList.toggle('complete');
  if (element === true) {
    tasks[element - 1].completed = false;
  } else {
    tasks[element - 1].completed = true;
  }
  return tasks;

 // saveDataLocally(myTasks());
};

const clearComplete = () => {
  const filteredTasks = tasks.filter((item) => item.completed);
  filteredTasks.forEach((task) => {
    removeItemAt(task.index);
  });
};

module.exports = {completeThis, clearComplete};