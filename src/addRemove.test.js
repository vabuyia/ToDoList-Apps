import { add, removeItemAt } from './addRemove.js';
import { myTasks } from './index.js';

const html = `
<div class="container">
      <div class="to-do-container">
        <h1>To Do List</h1>
        <br />
        <div class="list-container">
          <form class="to-do">
            <div class="title">
              <input type="text" value="Today's To Do" class="text-input" />
              <i class="icon fas fa-sync-alt restart"></i>
            </div>
            <div class="enter-element">
              <input
                type="text"
                placeholder="Add to your list..."
                class="add"
                id="add-input"
              />
              <i class="icon fas fa-sign-in-alt enter"></i>
            </div>
            <ul id="unordered-list" class="task-lists"></ul>
            <div class="delete">
              <button class="delete-all" type="reset">
                Clear all completed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
`
describe('Testing add and remove', () => {
    it('should add a task to the list', () => {
      myTasks();
      document.body.innerHTML = html
      const event = {
        key: 'Enter',
        preventDefault: () => {},
      };
  
      add(event);
  
      const list =  generateList();
      expect(list).toBeDefined();
      expect(list).toHaveLength(1);
      expect(list[0]).toEqual({ description: 'New description', completed: false, index: 1 });
    });
    it('shoud remove a task from the list', () => {
      setList([{ description: 'New description', completed: false, index: 1 }]);
      document.body.innerHTML = html;
      const trashBtn = document.querySelector('fa-trash-alt');
      const event = {
        type: 'click',
        target: trashBtn,
      };
  
      removeItemAt(event);
  
      const list = generateList();
      expect(list).toBeDefined();
      expect(list).toHaveLength(0);
      expect(list).toEqual([]);
    });
  });

