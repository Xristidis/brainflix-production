import React from "react";
import "../homepage/Homepage.scss";
// import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";
import NextVideo from "../../components/next-video/NextVideo";
import Pages from "../../pages/Page";
import axios from "axios";
import apiRoute from "../../variable";
import { v4 as uuidv4 } from "uuid";

class Homepage extends React.Component {
  state = {
    mainVideo: {},
    nextVideoList: [],
    comments: []
  };
  componentDidMount() {
    axios
      .get(`${apiRoute}/videoList`)
      .then(res => {
        const nextVideoList = res.data;
        const mainVideoId = nextVideoList[0].id;
        this.setState({ nextVideoList });
        return axios.get(
          `${apiRoute}/allVideos/${mainVideoId}`
        );
      })
      .then(res => {
        const mainVideo = res.data;
        this.setState({ mainVideo });
      });
  }
  // if param is set then grab from video id. if not grab first video

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      const videoId = this.props.match.params.videoId;
      axios
        .get(
          `${apiRoute}/allVideos/${videoId}`
        )
        .then(res => {
          const mainVideo = res.data;
          const mainVideoComments = res.data.comments;
          this.setState({ mainVideo });
        });
    }
  }

  render() {
    return (
      <>
        <Pages>
          <Video {...this.state.mainVideo} />
          <Comments mainVideo={this.state.mainVideo} />
          <NextVideo
            nextVideoList={this.state.nextVideoList}
            mainVideo={this.state.mainVideo}
          />
        </Pages>
      </>
    );
  }
}

export default Homepage;
