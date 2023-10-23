
class todoList {
    constructor(rootId, itemArray) {
        this.rootId = rootId;
        this.itemArray = itemArray;
        this.refresh();
    }
    add(title) {
        this.itemArray.push({ title: title, finished: false });
        this.refresh();
    }
    todoItemString(title, finished) {
        return `<div class="todo-item ${finished ? "finished" : "unfinished"}"><span>${title}</span><input type="checkbox" ${finished ? "checked" : ""} ></div>`
    }
    todoListString() {
        let html = ``;
        for (let item of this.itemArray) {
            html += this.todoItemString(item.title, item.finished)
        }
        return html;
    }
    refresh() {
        let elementString = this.todoListString();
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }
}

let initData = [
    {title: 'pay bills',  finished: false },
    {title: 'Feed fish',  finished: true },
    {title: 'Meet friend',  finished: true },
    {title: 'Read a book',  finished: false },
]

let myTodoList = new todoList("todo-list", initData);