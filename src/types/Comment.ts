type CommentType = {
    content: string,
    created: string,
    id: number,
    replies: Comment[],
    user: object
}

export default CommentType;