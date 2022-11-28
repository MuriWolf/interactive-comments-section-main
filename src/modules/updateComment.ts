// import Comment from "@/types/Comment"
function updateComment(url: string, property: string, value: string | number): boolean {
    fetch("http://localhost:3000/" + url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          [property]: value,
        })
      }).then(res => res.json())
    return true
}


export default updateComment;