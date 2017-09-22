import React from 'react'
import { Image } from 'semantic-ui-react'
import $ from 'jquery'

class Bubble extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playNumber: props.bubbleData.meta.playNumber
        };

        this.audioObj = null;
        this.initAudio = this.initAudio.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.getBubbleImgUrl = this.getBubbleImgUrl.bind(this);
    }

    initAudio() {
        let bubbleImage = $("#" + this.props.bubbleData.bubbleID);
        this.audioObj = new Audio(this.props.bubbleData.audio.url);
        this.audioObj.onplay = () => bubbleImage.attr("src", this.getBubbleImgUrl());
        this.audioObj.onpause = () => bubbleImage.attr("src", this.getBubbleImgUrl());
        this.audioObj.onended = () => bubbleImage.attr("src", this.getBubbleImgUrl());
        this.audioObj.play();
    }

    playAudio() {
        if (this.audioObj === null) {
            this.initAudio();
        } else if (this.audioObj.paused) {
            this.audioObj.play();
        } else {
            this.audioObj.pause();
        }
    }

    getBubbleImgUrl() {
        let imgUrl;
        let audioPlaying = false;

        if (this.audioObj !== null) {
            audioPlaying = !this.audioObj.paused;
        }

        if (audioPlaying && this.props.bubbleData.type === "N") {
            imgUrl = "/image/bubble_pause_n.png";
        } else if (audioPlaying && this.props.bubbleData.type === "S") {
            imgUrl = "/image/bubble_pause_s.png";
        } else if (audioPlaying && this.props.bubbleData.type === "E") {
            imgUrl = "/image/bubble_pause_e.png";
        } else if (audioPlaying && this.props.bubbleData.type === "W") {
            imgUrl = "/image/bubble_pause_w.png";
        } else if (audioPlaying && this.props.bubbleData.type === "NE") {
            imgUrl = "/image/bubble_pause_ne.png";
        } else if (audioPlaying && this.props.bubbleData.type === "NW") {
            imgUrl = "/image/bubble_pause_nw.png";
        } else if (audioPlaying && this.props.bubbleData.type === "SE") {
            imgUrl = "/image/bubble_pause_se.png";
        } else if (audioPlaying && this.props.bubbleData.type === "SW") {
            imgUrl = "/image/bubble_pause_sw.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "N") {
            imgUrl = "/image/bubble_play_n.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "S") {
            imgUrl = "/image/bubble_play_s.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "E") {
            imgUrl = "/image/bubble_play_e.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "W") {
            imgUrl = "/image/bubble_play_w.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "NE") {
            imgUrl = "/image/bubble_play_ne.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "NW") {
            imgUrl = "/image/bubble_play_nw.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "SE") {
            imgUrl = "/image/bubble_play_se.png";
        } else if (!audioPlaying && this.props.bubbleData.type === "SW") {
            imgUrl = "/image/bubble_play_sw.png";
        }

        return imgUrl;
    }

    render() {
        const imgUrl = this.getBubbleImgUrl();
        const x = this.props.bubbleData.position.x * 100 + '%';
        const y = this.props.bubbleData.position.y * 100 + '%';

        return (
            <Image id={this.props.bubbleData.bubbleID}
                   src={imgUrl}
                   onClick={this.playAudio}
                   width="13%" height="auto"
                   style={{
                       position: 'absolute',
                       left: x, top: y,
                       cursor: 'pointer'
                   }}
            />
        );
    }
}

export default Bubble
