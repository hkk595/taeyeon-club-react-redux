import React from 'react'
import Post from '../containers/PostContainer'

class PostListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div name="post_list" style={{paddingTop: "92px"}}>
                {this.props.posts.map(post =>
                    <Post key={post.id} postId={post.id} />
                )}
            </div>
        );
    }
}

export default PostListComponent
