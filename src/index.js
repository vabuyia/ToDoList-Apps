/* eslint-disable no-plusplus */
/* eslint-disable-next-line no-plusplus */

const listElement = document.querySelector('ul');

const taskList = [
  {
    index: 0,
    description: 'Going to the gym',
    completed: false,
  },
  {
    index: 2,
    description: 'Visit Friends and Family',
    completed: false,
  },
  {
    index: 1,
    description: 'Going home',
    completed: false,
  },
];

function populateList() {
  for (let i = 0; i < taskList.length; i++) {
    const newItem = document.createElement('li');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'box';
    newItem.appendChild(inputCheckbox);
    inputCheckbox.style.marginRight = '10px';

    const span = document.createElement('span');
    span.innerHTML = taskList[i].description;
    newItem.appendChild(span);

    const anchorElement = document.createElement('a');
    anchorElement.classList.add('delete');
    anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
    anchorElement.style.float = 'right';
    anchorElement.style.paddingLeft = '150px';
    anchorElement.style.color = 'red';
    newItem.appendChild(anchorElement);

    listElement.appendChild(newItem);

    
  }
}

populateList();