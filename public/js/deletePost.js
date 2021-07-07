async function deletePost(postId) {
    const response = await fetch('/api/posts/' + postId, {
            method: 'DELETE',
        });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(await response.json())
    }
}
