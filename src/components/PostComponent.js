import React from 'react'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import Bubble from '../containers/BubbleContainer'
import MediaQuery from 'react-responsive'
import $ from 'jquery'

class PostComponent extends React.Component {
    constructor(props) {
        super(props);

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

        if (this.props.post !== null && this.props.post !== undefined) {
            return (
                <Card id={this.props.post.id} style={{width: cardWidth}} centered>
                    <Card.Content>
                        <Image src={this.props.post.creator.avatar.url} avatar/>
                        <span style={{paddingLeft: '7px'}}>{this.props.post.creator.username}</span>
                    </Card.Content>
                    <div style={{position: 'relative'}}>
                        <Image src={this.props.post.image.url}/>
                        {this.props.post.bubbles.map(
                            (bubble) => <Bubble key={bubble.id} bubble={bubble}/>
                        )}
                    </div>
                    <Card.Content>
                        <Menu secondary>
                            <Menu.Item fitted>
                                <Icon name={this.state.likeIcon} color="red" size="large"
                                      onClick={this.changeLikeIcon}
                                      style={{cursor: 'pointer'}}
                                />
                                <span>{this.props.post.likeCount}</span>
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
                            <Linkify>{this.props.post.caption}</Linkify>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <span className='date'>
                        {this.props.post.createdAt}
                    </span>
                    </Card.Content>
                </Card>
            );
        }
    }

    changeLikeIcon() {
        this.setState(
            (prevState) => ({
                likeIcon: prevState.likeIcon === "heart" ? "empty heart" : "heart",
            }),
            () => {
                if (this.state.likeIcon === "heart") {
                    this.props.actions.likePost(this.props.post.id);
                } else {
                    this.props.actions.unlikePost(this.props.post.id);
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

export default PostComponent
