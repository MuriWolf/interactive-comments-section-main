// import Comment from "@/types/Comment"
import CommentType from "@/types/Comment";
import User from "@/types/User";
import getData from "./getData";

function getLastId(array: CommentType[], newId: number): number {
  array.forEach(item => {
    newId = item.id > newId ? newId = item.id : newId;
  })
  return newId
}

function postComment(url: string, commentContent: string) {
  getData<User>("http://localhost:3000/currentUser").then(data => {
    const currentUser: User = data;
    getData<CommentType[]>("http://localhost:3000/replies").then(data => {
      let newId = data[data.length - 1].id;
      newId = getLastId(data, newId);
      getData<CommentType[]>("http://localhost:3000/comments").then(data => {
        newId = getLastId(data, newId);
        newId++;
        fetch("http://localhost:3000" + url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: newId,
            content: commentContent,
            createdAt: "Right now",
            score: 0,
            user: currentUser,
            replies: []
          })
        }).then(res => res.json());
      })
    })
  })
}

export default postComment;