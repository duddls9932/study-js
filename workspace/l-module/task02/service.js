const todoService = (() => {
    const getTodos = async (callback, page = 1) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        const rowSize = 20;
        const end = page * rowSize;
        const start = end - rowSize + 1;

        if (callback) {
            callback(todos.slice(start - 1, end));
        }
    };

    return { getTodos: getTodos };
})();
