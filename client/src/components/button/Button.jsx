import React from "react";
import { Link } from "react-router-dom";
import portrait from "../../assets/images/Mohan-muruge.jpg";
import "./Button.scss";

export default class Button extends React.Component {
  render() {
    return (
      <div className="header__button-photo-wrapper">
        <Link className="header__button-link-wrapper" to="/upload">
          <button disabled className="header__button">
            UPLOAD
            <div className="button__operator"></div>
          </button>
        </Link>

        <div className="header__img-wrapper">
          <img
            src={portrait}
            className="header__img"
            alt="side profile of human"
            id=""
          />
        </div>
      </div>
    );
  }
}
