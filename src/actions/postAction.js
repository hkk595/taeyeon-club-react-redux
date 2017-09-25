export function likePost(postId) {
    return {
        type: "LIKE_POST",
        payload: {
            postId: postId
        }
    }
}

export function unlikePost(postId) {
    return {
        type: "UNLIKE_POST",
        payload: {
            postId: postId
        }
    }
}
