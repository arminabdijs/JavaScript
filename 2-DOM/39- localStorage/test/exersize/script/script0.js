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

        newTodoDiv.dataset.id = todo.id
        newTodoTitle.innerHTML = todo.title;
        completeBtn.innerHTML = 'Complete';
        deleteBtn.innerHTML = 'Delete';


        newTodoTitle.className = 'history__title'
        divLinks.className = 'links'
        completeBtn.className = "btn Complete"
        deleteBtn.className = "btn btn--red Delete"


        divLinks.append(completeBtn, deleteBtn)
        newTodoDiv.append(newTodoTitle, divLinks)

        contentHistory.append(newTodoDiv)
    })


    if (deleteBtn) {
        deleteBtn.addEventListener('click', (event) => {

            let targetId = Number(event.target.parentElement.parentElement.dataset.id)
            const index = todoList.findIndex(item => +item.id === targetId)
            if (index !== -1) {
                todoList.splice(index, 1);
                saveTodosToLocalStorage(todoList);
                newTodoDiv.remove();
            }


        });
    }

    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            todoList.forEach((t) => {

                if (t.id === +newTodoDiv.dataset.id) {
                    newTodoDiv.classList.toggle('unTodo');
                    if (newTodoDiv.classList.contains('unTodo')) {
                        completeBtn.innerText = 'Incomplete';
                        t.complete = true;
                    } else {
                        completeBtn.innerText = 'Complete';
                        t.complete = false;
                    }
                }
            });

            saveTodosToLocalStorage(todoList);
        });
    }
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
