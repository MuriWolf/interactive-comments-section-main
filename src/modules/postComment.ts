// import Comment from "@/types/Comment"
import CommentType from "@/types/Comment";
import User from "@/types/User";
import getData from "./getData";

function getLastId( array: CommentType[], newId: number): number {
  array.forEach(item => {
    newId = item.id > newId ? newId = item.id : newId;
  })
  return newId
}

function postComment(idComment: number, commentContent: string, url: string, comments?: CommentType[], replyingTo?: boolean | string ): boolean {
  getData<User>("https://interactive-comment-sectionn.herokuapp.com/currentUser").then(data => {
    const currentUser: User = data;
    getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/replies").then(data => {
      let newId = data[data.length - 1].id;
      newId = getLastId(data, newId);
      getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/comments").then(data => {
        newId = getLastId(data, newId);
        newId++;
        if(replyingTo && idComment) {
          fetch("https://interactive-comment-sectionn.herokuapp.com" + url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: newId,
              commentId: idComment,
              content: commentContent,
              createdAt: "Right now",
              score: 0,
              replyingTo: replyingTo,
              user: currentUser,
            })
          }).finally(() => {
            return true
          })
        } else {
          fetch("https://interactive-comment-sectionn.herokuapp.com" + url, {
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
            })
          }).finally(() => {
            return true
          })
        }
      })
    })
  })
  return true
}

export default postComment;