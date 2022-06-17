import { myTasks, saveDataLocally } from './index.js';

import { removeItemAt } from './addRemove.js';

export const completeThis = (element) => {
  const nextInput = element.nextSibling;
  const elementIndex = element.getAttribute('index');
  const isComplete = myTasks()[elementIndex - 1].complete;
  nextInput.classList.toggle('complete');
  if (isComplete === true) {
    myTasks()[elementIndex - 1].complete = false;
  } else {
    myTasks()[elementIndex - 1].complete = true;
  }
  saveDataLocally(myTasks());
};

export const clearComplete = () => {
  const filteredTasks = myTasks().filter((item) => item.complete);
  filteredTasks.forEach((task) => {
    removeItemAt(task.index);
  });
};
