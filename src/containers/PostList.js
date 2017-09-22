import React from 'react';
import Post from "../components/Post";

const ObjectID = require('bson-objectid');

// let initialState = require('../store/configureStore').initialState;
let postList = [{
    id: ObjectID.generate(),
    uuid: null,
    caption: "Taeyeon Concert PERSONA in Hong Kong 2017\nsource: https://twitter.com/davidss309/status/873761094166130688",
    privacy: "friend",
    creator: {
        id: null,
        uuid: null,
        firstName: null,
        lastName: null,
        gender: null,
        birth: null,
        description: null,
        realm: null,
        username: "taeyeon.club",
        email: "taeyeon.club@gmail.com",
        emailVerified: true,
        createdAt: null,
        updatedAt: null,
        avatar: {
            id: null,
            aspectRatio: 1.33,
            name: null,
            storage: null,
            format: "jpg",
            url: "https://instagram.fhkg1-1.fna.fbcdn.net/t51.2885-15/e35/18888418_228005741041888_5108103110207733760_n.jpg"
        },
    },
    collaborators: [],
    image: {
        id: null,
        aspectRatio: 1.33,
        name: null,
        storage: null,
        format: "jpg",
        url: "//i.imgur.com/aux6aGl.jpg"
    },
    bubbles: [{
        id: ObjectID.generate(),
        type: "music",
        orientation: "SE",
        positionX: 0.2,
        positionY: 0.05,
        playCount: 0,
        audio: {
            id: null,
            duration: 0,
            name: "TAEYEON_Make_Me_Love_You_sample.mp3",
            storage: null,
            format: "mp3",
            url: "/audio/TAEYEON_Make_Me_Love_You_sample.mp3",
        },
        creatorId: null,
        createdAt: null,
        updatedAt: null
    }],
    likeCount: 309,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
}];

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