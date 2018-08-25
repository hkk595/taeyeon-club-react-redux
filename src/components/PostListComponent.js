import React from 'react'
import Post from '../containers/PostContainer'

class PostListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div name="post_list" style={{paddingTop: "92px"}}>
        {this.props.postIds.map(postId =>
          <Post key={postId} postId={postId} />
        )}
      </div>
    );
  }
}

export default PostListComponent;
