import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostComponent from '../components/PostComponent'
import * as PostActionCreators from '../actions/PostActions'

// Pass the corresponding post object to the wrapped component
function mapStateToProps(state, ownProps) {
  return {
    post: state.posts.filter(post => post.id === ownProps.postId)[0]
  }
}

// Pass the action creators to the wrapped component as event handlers
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // ...bindActionCreators(PostActionCreators, dispatch)
    actions: bindActionCreators(PostActionCreators, dispatch)
  }
}

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent);

export default PostContainer;
