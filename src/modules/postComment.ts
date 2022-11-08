// import Comment from "@/types/Comment"
import CommentType from "@/types/Comment";
import User from "@/types/User";
import getData from "./getData";

function postComment(url: string, commentContent: string) {
  getData<User>("http://localhost:3000/currentUser").then(data => {
    const currentUser: User = data
    getData<CommentType[]>("http://localhost:3000/comments").then(data => {
      const comments = data;
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 6,
          content: commentContent,
          createdAt: "Right now",
          score: 0,
          user: currentUser,
          replies: []
        })
      }).then(res => res.json())
    })
    })

}

export default postComment;
