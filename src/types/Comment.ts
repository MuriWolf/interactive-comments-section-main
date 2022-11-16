import User from "@/types/User"

interface CommentType {
    id: number,
    commentId?: number,
    content: string,
    createdAt: string,
    score: number
    replyingTo?: string
    user: User,
}



export default CommentType;