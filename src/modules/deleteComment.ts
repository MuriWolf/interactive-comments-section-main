function deleteComment(url: string) {
    fetch(`http://localhost:3000/${url}`,{
        method:'DELETE'
    }).then(response=>{
        return response.json()
    })
}

export default deleteComment;