const displayComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => loadComment(data))
}

const loadComment = comments => {
    const displayComment = document.getElementById('display-comment')
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.innerHTML = `
       
            <h5 onclick="commentDetail(${comment.id})">${comment.body.slice(0, 10)}</h5>
        `;
        displayComment.appendChild(div)
    });
}

const commentDetail = id => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => displayCommentDetail(data))


}
const displayCommentDetail = comments => {
    const displayComment = document.getElementById('display-detail')
    displayComment.textContent = ''
    const div = document.createElement('div');
    div.innerHTML = `
            <h5>${comments.body}</h5>
        `;
    displayComment.appendChild(div)

}
