import React from "react";
import "./Video.scss";
import VideoPlaceholder from "../../assets/images/video-list-0.jpg";
import viewsIcon from "../../assets/icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/icons/SVG/Icon-likes.svg";
import play from "../../assets/icons/PNG/Icon-play.png";
import duration from "../../assets/icons/PNG/Icon-scrubber-control.png";
import fullscreen from "../../assets/icons/PNG/Icon-fullscreen.png";
import volume from "../../assets/icons/PNG/Icon-volume.png";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
var aDay = 24 * 60 * 60 * 1000;
// console.log(timeSince(new Date(Date.now() - aDay)));
// console.log(timeSince(new Date(Date.now() - aDay * 2)));

export default class Video extends React.Component {
  render() {
    const {
      image,
      description,
      likes,
      views,
      timestamp,
      channel,
      title,
      duration
    } = this.props;
    return (
      <section className="main-video__section-wrapper">
        <>
          <div className="main-video__video-wrapper">
            <img src={image} className="main-video__image" />
            <div className="main-video__video-buttons">
              <img src={play} className="main-video__play" />
              <div className="main-video__play-bar-wrapper">
                <div className="main-video__play-bar" />
                <div className="main-video__play-duration">0:00/{duration}</div>
              </div>
              <div className="main-video__sound-screen-wrapper">
                <img src={fullscreen} className="main-video__full-screen" />
                <img src={volume} className="main-video__volume" />
              </div>
            </div>
          </div>
          <div className="main-video__data-wrapper">
            <h1 className="main-video__header">{title}</h1>
            <div className="main-video__author-date">
              <p className="main-video__author">{channel}</p>
              <p className="main-video__date">{timeSince(timestamp)}</p>
            </div>
            <div className="main-video__info-wrapper">
              <div className="main-video__views">
                <img src={viewsIcon} className="main-video__view-icon" />
                <p className="">{views}</p>
              </div>
              <div className="main-video__likes">
                <img src={likesIcon} className="main-video__like-icon" />
                <p className="main-video__like-count">{likes}</p>
              </div>
            </div>
          </div>
          <div className="main-video__description">{description}</div>
        </>
      </section>
    );
  }
}
