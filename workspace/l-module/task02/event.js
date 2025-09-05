const button = document.getElementById("get-todos");

button.addEventListener("click", (e) => {
    todoService.getTodos(todoLayout.showTodo, 1);
    // todoService.getTodos(todoLayout.showTodo, 2);
});

// const successbutton = document.querySelectorAll(".success");
// console.log(successbutton);
// successbutton.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const clickedBtn = e.currentTarget;
//         const parentTr = clickedBtn.closest("tr");
//         parentTr.classList.add("completed");
//         parentTr.classList.remove("not-completed");
//         console.log(clickedBtn.classList);
//     });
// });
