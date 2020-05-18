import React from "react";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Button from "../button/Button";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Search />
        <Button />
      </header>
    );
  }
}
