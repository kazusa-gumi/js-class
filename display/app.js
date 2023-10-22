// let title ="buy food";
// let elementString = "<div>" + title + "</div>";

//  let rootElement = document.getElementById("todo-item");
// rootElement.innerHTML = elementString;

// const newTodo = document.createElement('div');
// newTodo.textContent = "Buy Food";
// rootElement.appendChild(newTodo);

let finished = true;
let checked = finished ? 'checked' : '';
let elementString = "<input type='checkbox' " + checked + ">";

let rootElement = document.getElementById("todo-item");
rootElement.innerHTML = elementString;