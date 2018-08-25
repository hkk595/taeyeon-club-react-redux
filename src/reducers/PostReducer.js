const postReducer = (state = [], action) => {
  switch (action.type) {
    case "LIKE_POST":
      return state.map(
        post => (post.id === action.payload.postId)?
          { ...post, likeCount: post.likeCount + 1 } : post
      );
    case "UNLIKE_POST":
      return state.map(
        post => (post.id === action.payload.postId)?
          { ...post, likeCount: post.likeCount - 1 } : post
      );
    default:
      return state;
  }
};

export default postReducer;
