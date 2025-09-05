const todoLayout = (() => {
    const showTodo = (todos) => {
        const table = document.querySelector(".todo-wrap");
        let text = ``;
        todos.forEach(({ userId, title, completed }) => {
            const status = completed ? "completed" : "not-completed";
            const successOrNot = completed
                ? "완료된일"
                : '<button class="success">할일완료</button>';
            text += `
                <tr class="${status}">
                    <td>UserID=${userId}</td>
                    <td>${title}</td>
                    <td>
                    ${successOrNot}
                    </td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showTodo: showTodo };
})();
