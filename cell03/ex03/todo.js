const newButton = document.getElementById("newButton");
const ftList = document.getElementById("ft_list");

newButton.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo-item";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    ftList.prepend(todo);
}

function saveTodos() {
    const todos = [];

    const items = ftList.querySelectorAll(".todo-item");

    items.forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    const todoCookie = cookies.find(function (cookie) {
        return cookie.startsWith("todos=");
    });

    if (!todoCookie) {
        return;
    }

    const data = todoCookie.substring("todos=".length);

    const todos = JSON.parse(
        decodeURIComponent(data)
    );

    for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i]);
    }
}

loadTodos();