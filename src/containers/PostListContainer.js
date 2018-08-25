import { connect } from 'react-redux';
import PostListComponent from '../components/PostListComponent'

// Pass a list of post ids (not the whole post objects) to the child component
function mapStateToProps(state, ownProps) {
  return {
    postIds: state.posts.map(post => post.id)
  }
}

const PostListContainer = connect(mapStateToProps)(PostListComponent);

export default PostListContainer;
