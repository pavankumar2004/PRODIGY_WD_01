let blogs = [];

function addBlog() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const blog = {
        title: title,
        content: content
    };

    blogs.push(blog);
    saveBlogs();
    window.location.href = 'index.html';
}

function saveBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function loadBlogs() {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
        displayBlogs();
    }
}

function displayBlogs() {
    const blogsContainer = document.getElementById('blogs-container');
    blogsContainer.innerHTML = "";

    blogs.forEach((blog, index) => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-preview');
        blogDiv.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content.slice(0, 50)}...</p>
            <button onclick="showFullBlog(${index})">Read More</button>`;
        blogsContainer.appendChild(blogDiv);
    });
}
// function showFullBlog(index) {
//     const blog = blogs[index];

//     alert(`Title: ${blog.title}\n\nContent:\n${blog.content}`);
// }

// ... your existing script.js code ...

function showFullBlog(index) {
    const blog = blogs[index];

    // Pass blog data to the popup page
    localStorage.setItem('popupTitle', blog.title);
    localStorage.setItem('popupContent', blog.content);

    // Open the popup page with full-screen parameters
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth = screenWidth;
    const popupHeight = screenHeight;

    const popupFeatures = `width=${popupWidth},height=${popupHeight},top=0,left=0`;

    window.open('blogpopup.html', 'Blog Popup', popupFeatures);
}


function loadPopupContent() {
    const popupTitle = localStorage.getItem('popupTitle');
    const popupContent = localStorage.getItem('popupContent');

    // Set the content in the popup page
    document.getElementById('popup-title').innerText = popupTitle;
    document.getElementById('popup-blog-content').innerText = popupContent;
}

function closePopup() {
    // Close the popup
    window.close();
}


loadBlogs();


