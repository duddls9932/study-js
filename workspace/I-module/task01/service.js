const postService = (() => {
    const input = document.getElementById("get-posts");
    const getPosts = async (callback, page = input.value) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        const rowSize = 10;
        const end = page * rowSize;
        const start = end - rowSize + 1;

        if (callback) {
            callback(posts.slice(start - 1, end));
        }
    };

    return { getPosts: getPosts };
})();
