import { connect } from 'react-redux'
import Post from '../components/Post'
import { likePost } from '../actions/postAction'

function mapStateToProps(state, postId) {
    return {
        post: state.filter(post => post.id === postId)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLikeClick: postId => {
            dispatch(likePost(postId))
        }
    }
}

const PostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)

export default PostContainer