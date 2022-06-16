 import { getTasks, add,myTasks } from './addRemove.js';

const jsdom = require('jsdom')
const { JSDOM } = jsdom

const mockHtml = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />

    <!--Font Awesome-->
    <script
      src="https://kit.fontawesome.com/baa3f51658.js"
      crossorigin="anonymous"
    ></script>

    <title>To Do List</title>
  </head>

  <body>
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
  </body>
</html>`)

describe('Testing add and remove', () => {
  it('should add a task to the list', () => {
    myTasks()
    document.body.innerHTML = html
    const event = {
      key: 'Enter',
      preventDefault: () => {},
    }

    add(event)

    const list = getTasks()
    expect(list).toBeDefined()
    expect(list).toHaveLength(1)
    expect(list[0]).toEqual({
      description: 'New description',
      completed: false,
      index: 1,
    })
  })
  it('shoud remove a task from the list', () => {
    setList([{ description: 'New description', completed: false, index: 1 }])
    document.body.innerHTML = html
    const trashBtn = document.querySelector('fa-trash-alt')
    const event = {
      type: 'click',
      target: trashBtn,
    }

    removeItemAt(event)

    const list = generateList()
    expect(list).toBeDefined()
    expect(list).toHaveLength(0)
    expect(list).toEqual([])
  })
})