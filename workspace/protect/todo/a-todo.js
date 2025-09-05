const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
});

function addTodo() {
    const text = input.value.trim();

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
    input.value = "";
}

clearBtn.addEventListener("click", function () {
    todoList.innerHTML = "";
});
