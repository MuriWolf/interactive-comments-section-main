import User from "@/types/User"

type CommentType = {
    content: string,
    created: string,
    id: number,
    replies: CommentType[],
    user: User,
    score: number
}



export default CommentType;