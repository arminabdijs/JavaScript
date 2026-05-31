const $ = document;

function _querySelector(q) {
    return $.querySelector(q);
}

function _querySelectorAll(q) {
    return $.querySelectorAll(q);
}

function _createElement(name) {
    return $.createElement(name);
}

// get variable
const iconPlease = _querySelector('.icon__please');
const iconBin = _querySelector('.icon__bin');
const contentHistory = _querySelector('.content__history');
const todoListInput = $.getElementById('todo-list__input');
const isExistMassage = _querySelector('p');

// localStorage
function saveTodosToLocalStorage(todoLists) {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function getTodosFromLocalStorage() {
    const todoLists = localStorage.getItem('todoLists');
    return todoLists ? JSON.parse(todoLists) : [];

}


// clear Input
function clearLocalStorage() {
    // localStorage.clear()
    localStorage.removeItem('todoLists')
    contentHistory.innerHTML = ''
}


function addTodoListHandler() {

    const title = todoListInput.value.trim();

    if (!title) {
        isExistMassage.innerHTML = 'value exist to note or empity';
        isExistMassage.className = 'active';
        isExistMassage.style.backgroundColor = '#ff1f65';
        setTimeout(() => {
            isExistMassage.className = '';
        }, 4000);
        return;
    }

    const todoList = getTodosFromLocalStorage();


    const newTodo = {id: todoList.length + 1, title, complete: false};

    todoList.push(newTodo);


    saveTodosToLocalStorage(todoList);

    createTodoElement()

    todoListInput.value = '';
    todoListInput.focus()
}

//add todo List
function createTodoElement() {

    let newTodoDiv, deleteBtn, completeBtn, newTodoTitle, divLinks

    const todoList = getTodosFromLocalStorage();

    contentHistory.innerHTML = ''

    todoList.forEach(todo => {


        newTodoDiv = _createElement('div');
        newTodoTitle = _createElement('h3');
        divLinks = _createElement('div');
        completeBtn = _createElement('button');
        deleteBtn = _createElement('button');

        newTodoDiv.className = 'item__history';

        newTodoTitle.innerHTML = todo.title;
        completeBtn.innerHTML = 'Complete';
        deleteBtn.innerHTML = 'Delete';


        newTodoTitle.className = 'history__title'
        divLinks.className = 'links'
        completeBtn.className = "btn Complete"
        deleteBtn.className = "btn btn--red Delete"


        deleteBtn.setAttribute('onclick', `removeTodo(${todo.id})`)
        completeBtn.setAttribute('onclick', `editTodo(${todo.id})`)

        if (todo.complete) {
            newTodoDiv.className = 'item__history unTodo'
            completeBtn.innerHTML = 'UnComplete';
        }

        divLinks.append(completeBtn, deleteBtn)
        newTodoDiv.append(newTodoTitle, divLinks)

        contentHistory.append(newTodoDiv)
    })

}


function removeTodo(todoId) {
    const todoList = getTodosFromLocalStorage();

    const index = todoList.findIndex(item => item.id === todoId)

    if (index !== -1) {
        todoList.splice(index, 1);
        saveTodosToLocalStorage(todoList);
        createTodoElement()
    }
}

function editTodo(todoId) {
    const todoList = getTodosFromLocalStorage();

    todoList.forEach((todo) => {

        if (todo.id === todoId) {
            todo.complete = !todo.complete
        }
    });

    saveTodosToLocalStorage(todoList);
    createTodoElement()
}

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', createTodoElement);

iconPlease.addEventListener('click', addTodoListHandler);
iconBin.addEventListener('click', clearLocalStorage);

todoListInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addTodoListHandler()
    }
});

todoListInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
        clearLocalStorage()
    }
});
