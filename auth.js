let isAuthenticated = false;

function authenticate() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === 'admin' && passwordInput === 'admin') {
        isAuthenticated = true;
        window.location.href = 'addblog.html'; // Redirect to addblog.html upon successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function addBlog() {
    if (isAuthenticated) {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title.trim() !== '' && content.trim() !== '') {
            const blog = {
                title: title,
                content: content
            };

            blogs.push(blog);
            saveBlogs();
            displayBlogs();
            clearBlogForm();
        } else {
            alert('Please enter both title and content for the blog.');
        }
    } else {
        alert('You need to log in first.');
    }
}
