import User from "@/types/User"

type CommentType = {
    id: number,
    user: User,
    content: string,
    createdAt: string,
    score: number
    replies: CommentType[],
}



export default CommentType;