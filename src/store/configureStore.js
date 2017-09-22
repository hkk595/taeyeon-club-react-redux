import { createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from '../reducers/rootReducer'

const ObjectID = require('bson-objectid');
const uuidv1 = require('uuid/v1');

const logger = createLogger();

let creatorId = ObjectID.generate();
let creatorUuid = uuidv1();
let creatorAvatarId = ObjectID.generate();
let creatorCreatedAt = new Date().toLocaleDateString();
let bubbleId = ObjectID.generate();
let bubbleAudioId = ObjectID.generate();
let bubbleCreatedAt = new Date().toLocaleDateString();
let postId = ObjectID.generate();
let postUuid = uuidv1();
let postImageId = ObjectID.generate();
let postCreatedAt = new Date().toLocaleDateString();

const initialState = {
    id: postId,
    uuid: postUuid,
    caption: "Taeyeon Concert PERSONA in Hong Kong 2017\nsource: https://twitter.com/davidss309/status/873761094166130688",
    privacy: "friend",
    creator: {
        id: creatorId,
        uuid: creatorUuid,
        firstName: null,
        lastName: null,
        gender: null,
        birth: null,
        description: null,
        realm: null,
        username: "taeyeon.club",
        email: "taeyeon.club@gmail.com",
        emailVerified: true,
        createdAt: creatorCreatedAt,
        updatedAt: creatorCreatedAt,
        avatar: {
            id: creatorAvatarId,
            aspectRatio: 1.33,
            name: null,
            storage: null,
            format: "jpg",
            url: "https://instagram.fhkg1-1.fna.fbcdn.net/t51.2885-15/e35/18888418_228005741041888_5108103110207733760_n.jpg"
        },
    },
    collaborators: [],
    image: {
        id: postImageId,
        aspectRatio: 1.33,
        name: null,
        storage: null,
        format: "jpg",
        url: "//i.imgur.com/aux6aGl.jpg"
    },
    bubbles: [{
        id: bubbleId,
        type: "music",
        orientation: "SE",
        positionX: 0.2,
        positionY: 0.05,
        playCount: 0,
        audio: {
            id: bubbleAudioId,
            duration: 0,
            name: "TAEYEON_Make_Me_Love_You_sample.mp3",
            storage: null,
            format: "mp3",
            url: "/audio/TAEYEON_Make_Me_Love_You_sample.mp3",
        },
        creatorId: creatorId,
        createdAt: bubbleCreatedAt,
        updatedAt: bubbleCreatedAt
    }],
    likeCount: 309,
    createdAt: postCreatedAt,
    updatedAt: postCreatedAt,
};

// module.exports = {
//     initialState
// };

export default function configureStore() {
    return createStore(rootReducer, initialState);
}
