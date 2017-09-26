import { connect } from 'react-redux';
import PostListComponent from '../components/PostListComponent'

// let postList = initialState;

function mapStateToProps(state, ownProps) {
    return state
}

const PostListContainer = connect(mapStateToProps)(PostListComponent)

export default PostListContainer