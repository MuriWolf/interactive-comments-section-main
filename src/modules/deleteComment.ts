function deleteComment(url: string): boolean {
    fetch(`https://interactive-comment-sectionn.herokuapp.com/${url}`,{
        method:'DELETE'
    }).then(response=>{
        return response.json()
    })
    return true
}

export default deleteComment;