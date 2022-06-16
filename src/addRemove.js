// eslint-disable-next-line import/no-cycle
//const { generateList, saveDataLocally } = require('./index.js');

//const myTasks  = require('./index.js');

let tasks = []
function myTasks() {
  return tasks;
}

const add = (textInputValue) => {
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: myTasks().length + 1,
  };

  const addedItem = TaskItem;
  myTasks().push(addedItem);
  //saveDataLocally(myTasks());
  return myTasks();
};

 const clearDiv = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const removeItemAt = (index) => {
  myTasks().splice(index - 1, 1);
  generateList(myTasks());
  saveDataLocally(myTasks());
}

const changeInput = (element) => {
  const newDescription = element.value;
  const elementIndex = element.getAttribute('index');
  myTasks()[elementIndex - 1].description = newDescription;
  saveDataLocally(myTasks());
};


module.exports = {add, myTasks};