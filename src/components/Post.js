import React from 'react'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import Bubble from './Bubble'
import MediaQuery from 'react-responsive'
import $ from 'jquery'

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeIcon: "empty heart",
            likeNumber: this.props.data.likeCount
        };

        this.loadPost = this.loadPost.bind(this);
        this.addBubble = this.addBubble.bind(this);
        this.changeLikeIcon = this.changeLikeIcon.bind(this);
    }

    componentDidMount() {
        // To convert new line characters to <br> in text of React with react-linkify,
        // need to update this in componentDidMount()
        let caption = $("#" + this.props.data.id).find(".description");
        let captionContent = caption.html();
        captionContent = captionContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        caption.html(captionContent);
    }

    loadPost(screenType) {
        const cardWidth = (screenType === "desktop")? "50%" : "100%";

        return (
            <Card id={this.props.data.id} style={{width: cardWidth}} centered>
                <Card.Content>
                    <Image src={this.props.data.creator.avatar.url} avatar/>
                    <span style={{paddingLeft: '7px'}}>{this.props.data.creator.username}</span>
                </Card.Content>
                <div style={{position: 'relative'}}>
                    <Image src={this.props.data.image.url}/>
                    {this.addBubble()}
                </div>
                <Card.Content>
                    <Menu secondary>
                        <Menu.Item fitted>
                            <Icon name={this.state.likeIcon} color="red" size="large"
                                  onClick={this.changeLikeIcon}
                                  style={{cursor: 'pointer'}}
                            />
                            <span>{this.state.likeNumber}</span>
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
                        <Linkify>{this.props.data.caption}</Linkify>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <span className='date'>
                        {this.props.data.createdAt}
                    </span>
                </Card.Content>
            </Card>
        );
    }

    addBubble() {
        return (
            this.props.data.bubbles.map(
                (bubble) => <Bubble key={bubble.id} data={bubble}/>
            )
        );
    }

    changeLikeIcon() {
        this.setState((prevState) => ({
            likeIcon: prevState.likeIcon === "heart"? "empty heart" : "heart",
            likeNumber: prevState.likeIcon === "heart"? prevState.likeNumber - 1 : prevState.likeNumber + 1
        }));
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

export default Post