async function addComment(postId, content) {
    const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({postId, content}),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(await response.json())
    }
}
