const postLayout = (() => {
    const showPosts = (posts) => {
        const wrap = document.getElementById("post-wrap");
        let text = ``;

        posts.forEach(({ userId, title, body }) => {
            text += `
            
            <table id="main-table">
  <thead>
    <tr>
      <th>>User ID: ${userId}</th>
      <th>${title}</th>
      <th>${body}</th>
    </tr>
  </thead>
</table>
            `;
        });

        wrap.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
