import React from "react";
import "./NextVideo.scss";
import { Link } from "react-router-dom";

export default class NextVideo extends React.Component {
  render() {
    return (
      <section className="next-video">
        <h3 className="next-video__header">Next Video</h3>
        <div className="next-video__list-wrapper">
          {this.props.nextVideoList
            .filter(videoObj => {
              return this.props.mainVideo.id !== videoObj.id;
            })
            .map(videoObj => {
              return (
                <Link to={`/videos/${videoObj.id}`} key={videoObj.id}>
                  <div className="next-video__wrapper">
                    <img
                      className="next-video__thumbnail"
                      src={"" + videoObj.image + ""}
                      alt=""
                    />
                    <div className="next-video__info-wrapper">
                      <div className="next-video__description">
                        {videoObj.title}
                      </div>
                      <div className="next-video__author">
                        {videoObj.channel}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    );
  }
}
