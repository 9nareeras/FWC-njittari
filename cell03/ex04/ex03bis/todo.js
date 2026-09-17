$(document).ready(function () {

    $("#newButton").click(function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            createTodo(text.trim(), true);
            saveTodos();
        }
    });

    function createTodo(text, addToTop) {
        const todo = $("<div>")
            .addClass("todo-item")
            .text(text);

        todo.click(function () {
            const remove = confirm(
                "Do you want to remove this TO DO?"
            );

            if (remove) {
                $(this).remove();
                saveTodos();
            }
        });

        if (addToTop) {
            $("#ft_list").prepend(todo);
        } else {
            $("#ft_list").append(todo);
        }
    }

    function saveTodos() {
        const todos = [];

        $(".todo-item").each(function () {
            todos.push($(this).text());
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

        const data =
            todoCookie.substring("todos=".length);

        const todos =
            JSON.parse(decodeURIComponent(data));

        todos.forEach(function (text) {
            createTodo(text, false);
        });
    }

    loadTodos();

});