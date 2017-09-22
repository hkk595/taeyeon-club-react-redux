import React from 'react';
import Post from "../components/Post";

let postList = [{
        postID: "6f02a866",
        creator: {
            userID: "84db2bea",
            userName: "taeyeon.club",
            userPhoto: "https://instagram.fhkg1-1.fna.fbcdn.net/t51.2885-15/e35/18888418_228005741041888_5108103110207733760_n.jpg"
        },
        url: null,
        type: "image",
        images: {
            lowRes: null,
            standardRes: {
                url: "//i.imgur.com/aux6aGl.jpg",
                name: null,
                width: null,
                height: null,
                aspectRatio: null,
                format: "jpg"
            }
        },
        caption: "Taeyeon Concert PERSONA in Hong Kong 2017\r\nsource: https:\/\/twitter.com\/davidss309\/status\/873761094166130688",
        bubbles: [{
                bubbleID: "b8390aa2",
                postID: "6f02a866",
                userID: "84db2bea",
                audio: {
                    url: "/audio/TAEYEON_Make_Me_Love_You_sample.mp3",
                    name: "TAEYEON_Make_Me_Love_You_sample.mp3",
                    format: "mp3"
                },
                type: "SE",
                position: {
                    x: 0.2,
                    y: 0.05,
                },
                meta: {
                    playNumber: 0,
                    createTime: null,
                    updateTime: null
                }
            }
        ],
        comments: [],
        tags: [],
        meta: {
            likeNumber: 309,
            createTime: "2017-07-11",
            updateTime: null,
        }
    }
];

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
    }

    addPost() {
        return(
            postList.map(
                (post) => <Post key={post.postID} postData={post}/>
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