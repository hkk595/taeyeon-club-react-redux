import { connect } from 'react-redux';
import PostListComponent from '../components/PostListComponent'

function mapStateToProps(state, ownProps) {
    return {
        postIds: state.posts.map(post => post.id)
    }
}

const PostListContainer = connect(mapStateToProps)(PostListComponent)

export default PostListContainer
