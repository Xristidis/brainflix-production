import React from "react";
import "../upload/Upload.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import apiRoute from "../../variable";

class Upload extends React.Component {

  newUpload = (event) => {
    event.preventDefault();
    let id = uuidv4();

    const newVideo = {
      "id": `${id}`,
      "title": event.target.title.value,
      "channel": "New Upload",
      "image": "https://i.imgur.com/ibLw5q5.jpg",
      "description": event.target.description.value,
      "views": "288",
      "likes": "2",
      "duration": "4:28",
      "video": "https://project-2-api.herokuapp.com/stream",
      "timestamp": 1545162149000,
      "comments": [
        {
          'name': "Janelle Richards",
          'comment': "This is a new video. I like it.",
          'id': "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          'likes': 0,
          'timestamp': 1545162149000
        },
        {
          'name': "Gary Wong",
          'comment': "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          'id': "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          'likes': 0,
          'timestamp': 1544595784046
        },
        {
          'name': "Theodore Duncan",
          'comment': "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          'id': "993f950f-df99-48e7-bd1e-d95003cc98f1",
          'likes': 0,
          'timestamp': 1542262984046
        }
      ]
    },

      newVidForList = {
        'title': event.target.title.value,
        'image': "https://i.imgur.com/ibLw5q5.jpg",
        'channel': event.target.description.value,
        'description': "New Upload",
        'id': `${id}`
      };
    axios.post(`${apiRoute}/videoList`, { newVideoForList: newVidForList })
      .then(res => {
        console.log(res)
        axios.post(`${apiRoute}/allVideos`, { newVideo })
      })
  };

  render() {
    return (
      <main>
        <div className="upload__header-wrapper">
          <h1 className="upload__header">Upload Video</h1>
        </div>
        <div className="upload__video-info">
          <div className="upload__photo-wrapper">
            <h2 className="upload__video-thumbnail-heading">VIDEO THUMBNAIL</h2>
            <img alt="bicycle" className="upload__video-photo" src={uploadPreview}></img>
          </div>
          <form className="upload__new" onSubmit={this.newUpload}>
            <div className="upload__upload-area">
              <label className="upload__label">
                TITLE YOUR VIDEO
              </label>
              <textarea
                type="text"
                name="title"
                placeholder="Add a title to your video"
                maxLength="120"
                size="30"
                rows="4"
                width="48"
                height="48"
                className="upload__title"
              ></textarea>
              <label className="upload__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Add a description of your video"
                maxLength="150"
                className="upload__description"
              ></textarea>
              <div className="upload__button-wrapper">
                <input
                  type="submit"
                  value="PUBLISH"
                  className="upload__button"
                ></input>
                <input
                  type="submit"
                  value="CANCEL"
                  className="upload__cancel-button"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Upload;
