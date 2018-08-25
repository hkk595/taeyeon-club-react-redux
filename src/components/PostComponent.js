import React from 'react'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import Bubble from '../containers/BubbleContainer'
import MediaQuery from 'react-responsive'
import $ from 'jquery'

class PostComponent extends React.Component {
  constructor(props) {
    super(props);

    // This is merely UI state, no need to put in the redux store
    this.state = {
      likeIcon: "empty heart",
    };

    this.loadPost = this.loadPost.bind(this);
    this.changeLikeIcon = this.changeLikeIcon.bind(this);
  }

  componentDidMount() {
    // To convert new line characters to <br> in text of React with react-linkify,
    // need to update this in componentDidMount()
    let caption = $("#" + this.props.post.id).find(".description");
    let captionContent = caption.html();
    captionContent = captionContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    caption.html(captionContent);
  }

  loadPost(screenType) {
    const cardWidth = (screenType === "desktop")? "50%" : "100%";
    const { post } = this.props;

    if (post !== null && post !== undefined) {
      return (
        <Card id={post.id} style={{width: cardWidth}} centered>
          <Card.Content>
            <Image src={post.creator.avatar.url} avatar />
            <span style={{paddingLeft: '7px'}}>{post.creator.username}</span>
          </Card.Content>
          <div style={{position: 'relative'}}>
            <Image src={post.image.url} />
            {post.bubbles.map(
              (bubble) => <Bubble key={bubble.id} bubble={bubble} />
            )}
          </div>
          <Card.Content>
            <Menu secondary>
              <Menu.Item fitted>
                <Icon name={this.state.likeIcon} color="red" size="large"
                      onClick={this.changeLikeIcon}
                      style={{cursor: 'pointer'}}
                />
                <span>{post.likeCount}</span>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item fitted>
                  <Icon name="mail outline" color="teal" size="large"
                        style={{cursor: 'pointer'}}
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Card.Description>
              <Linkify>{post.caption}</Linkify>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <span className='date'>
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          </Card.Content>
        </Card>
      );
    }
  }

  changeLikeIcon() {
    const { likePost, unlikePost } = this.props.actions;
    const { id: postId } = this.props.post;

    this.setState(
      // Alter the likeIcon of the post UI
      (prevState) => ({
        likeIcon: prevState.likeIcon === "heart" ? "empty heart" : "heart"
      }),
      // Callback to alter the corresponding likeCount number in the state
      () => {
        if (this.state.likeIcon === "heart") {
          likePost(postId);
        } else {
          unlikePost(postId);
        }
      }
    );
  }

  render() {
    return (
      <div style={{paddingBottom: '30px'}}>
        <MediaQuery minDeviceWidth={1224}>
          {this.loadPost("desktop")}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          {this.loadPost("mobile")}
        </MediaQuery>
      </div>
    );
  }
}

export default PostComponent;
