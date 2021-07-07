const createPostHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    let response = null;
    if (title && content) {
        response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(await response.json())
    }
};

document
  .querySelector('#create-post form')
  .addEventListener('submit', createPostHandler);