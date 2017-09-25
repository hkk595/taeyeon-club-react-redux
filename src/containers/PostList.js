import React from 'react';
import Post from "../components/Post";
import initialState from "../store/configureStore"

let postList = initialState;

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
    }

    addPost() {
        return(
            postList.map(
                (post) => <Post key={post.id} data={post}/>
            )
        );
    }

    render() {
        return(
            <div name="post_list" style={{paddingTop: "92px"}}>
                {this.addPost()}
            </div>
        );
    }
}

export default PostList;