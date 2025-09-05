const input = document.getElementById("get-posts");
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        postService.getPosts(postLayout.showPosts, input.value);
    }
});
