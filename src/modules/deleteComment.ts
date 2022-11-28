function deleteComment(url: string): boolean {
    fetch(`http://localhost:3000/${url}`,{
        method:'DELETE'
    }).then(response=>{
        return response.json()
    })
    return true
}

export default deleteComment;