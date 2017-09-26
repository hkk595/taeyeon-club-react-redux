import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostComponent from '../components/PostComponent'
import * as PostActionCreators from '../actions/PostActions'

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts.filter(post => post.id === ownProps.postId)[0]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        // ...bindActionCreators(PostActionCreators, dispatch)
        actions: bindActionCreators(PostActionCreators, dispatch)
    }
}

const PostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostComponent)

export default PostContainer