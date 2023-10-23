// // let title ="buy food";
// // let elementString = "<div>" + title + "</div>";

//  let rootElement = document.getElementById("todo-item");
// // rootElement.innerHTML = elementString;

// const newTodo = document.createElement('div');
// newTodo.textContent = "Buy Food";
// rootElement.appendChild(newTodo);


// const newTodo2 = document.createElement('div');
// newTodo2.textContent = "Cook Food";
// rootElement.appendChild(newTodo2);

// // appendChild will add the element(newTodo) to the root element(rootElement).

// // let finished = true;
// // let checked = finished ? 'checked' : '';
// // let elementString = "<input type='checkbox' " + checked + ">";

// // let rootElement = document.getElementById("todo-item");
// // rootElement.innerHTML = elementString;

// // 1) First add in a <p> and <span> tag
// // 2) Add the checkbox and title together

// // let finished = true;
// // let checked = finished ? 'checked' : '';
// // let elementString = "<input type='checkbox' " + checked + ">";

// // let rootElement = document.getElementById("todo-item");
// // rootElement.innerHTML = elementString;

// Correct ID is "todo-list"
const rootElement = document.getElementById("todo-list");

function createTodo(title, finished) {
    const newTodo = document.createElement('div');
    const todoTitle = document.createElement('span');
    todoTitle.textContent = title;
    const chkBox = document.createElement('input');
    chkBox.setAttribute('type', 'checkbox', checked = `${finished} ? 'checked' : ''`);
    newTodo.appendChild(todoTitle);
    newTodo.appendChild(chkBox);
    newTodo.classList.add('todo-item');
    if (finished) {
        newTodo.classList.add('finished')
        chkBox.setAttribute('checked', true);
    } else {
        newTodo.classList.add('unfinished');
    }
    rootElement.appendChild(newTodo);
}

// createTodo('Buy Food', true);
// createTodo('Buy Dog Food', false);


let todoList = [
    { title: "Hit the gym", finished: false },
    { title: "Pay bills", finished: true },
    { title: "Meet a friend", finished: false },
    { title: "Buy apples", finished: false },
    { title: "read a book", finished: true },
    { title: "learn JavaScript", finished: true },
]

// {} is an object
// todoList[0].title = "Hit the gym".
// todoList[0].finished = false
// Use a loop to output the lost to the browser.

// array[0][0]is for a 2d array
// array[i].title, array[i].finished

function genList(list) {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        createTodo(list[i].title, list[i].finished)
    }
}

genList(todoList);