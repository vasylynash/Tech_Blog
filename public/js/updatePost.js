async function updatePost(id, title, content) {
        response = await fetch('/api/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' },
        });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(await response.json())
    }
};
