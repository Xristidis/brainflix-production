import React from "react";
import "./Comments.scss";
import VideoPlaceholder from "../../assets/images/video-list-0.jpg";
import views from "../../assets/icons/SVG/Icon-views.svg"; // sometimes assets dont show
import likes from "../../assets/icons/SVG/Icon-likes.svg";

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

export default class Comments extends React.Component {
  render() {
    let comments = this.props.mainVideo.comments

    if (!comments) {
      return null;
    } else {
      return (
        <section className="comments">
          <h2 className="comments__header">3 Comments</h2>
          <div className="comments__wrapper">
            <img className="comments__photo"></img>
            <form className="comments__new">
              <div className="comments__comment-area">
                <label for="" className="comments__label">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  type="text"
                  name="comment"
                  placeholder="That was easily the most spectacualr BMX moment ever."
                  maxlength="120"
                  size="30"
                  rows="4"
                  width="48"
                  height="48"
                  className="comments__comment-input"
                ></textarea>
              </div>
              <input
                type="submit"
                value="COMMENT"
                className="comments__button"
                disabled
              ></input>
            </form>
          </div>
          <div className="comments__past-wrapper" id="comments__past-wrapper">
            {comments.map(commentObj => {
              return (
                <div className="comments__past">
                  <img className="comments__past-photo" />
                  <div className="comments__info">
                    <div className="comments__name">{commentObj.name}</div>
                    <div className="comments__date">
                      {timeSince(commentObj.timestamp)}
                    </div>
                    <div className="comments__content">
                      {commentObj.comment}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
    }
  }
}
