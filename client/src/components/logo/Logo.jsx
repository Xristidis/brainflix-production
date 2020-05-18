import React from "react";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import "./Logo.scss";

export default class Logo extends React.Component {
  render() {
    return (
      <Link className="logo" to="/">
        <img
          src={logo}
          alt="logo that reads the word Brainflix"
          className="logo__image"
        />
      </Link>
    );
  }
}
