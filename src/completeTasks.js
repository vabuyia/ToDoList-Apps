const arrayTasks = [{ description: 'task', completed: true }, { description: 'task', completed: false }];
const completeThis = (element) => {
  if (element === true) {
    return true;
  }
  return false;
};

const clearComplete = () => {
  const filteredTasks = arrayTasks.filter((item) => item.completed === false);

  return filteredTasks.length;
};

module.exports = { completeThis, clearComplete };