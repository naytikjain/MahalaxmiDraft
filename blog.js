function toggleBlog(clickedPost) {
    const blogPosts = document.querySelectorAll('.blog-post');

    // Remove "active" class from all posts except the clicked one
    blogPosts.forEach(post => {
        if (post !== clickedPost) {
            post.classList.remove('active');
        }
    });

    // Toggle "active" class on the clicked post
    clickedPost.classList.toggle('active');
}
