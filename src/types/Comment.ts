import User from "@/types/User"

interface CommentType {
    id: number,
    commentId?: number,
    user: User,
    content: string,
    createdAt: string,
    score: number
    replies: CommentType[],
}



export default CommentType;