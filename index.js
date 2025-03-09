const postsContainer = document.getElementById('posts');

function createPostHTML(post) {
    return `<div class="post-container">
            <h2>Title: ${post.title}</h2>
            <div>Content: ${post.body}</div>
            </div>`
}

function renderPosts(container, posts) {
    posts.forEach((post) => {
        container.innerHTML += createPostHTML(post);
    })
}

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const posts = await response.json();
        renderPosts(postsContainer, posts);
    }
    catch (error) {
        postsContainer.textContent = `${error}`;
    }
}

getPosts();