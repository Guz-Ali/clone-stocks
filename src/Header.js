import React from "react";
import Logo from "./robinhood.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} width={30}></img>
      </div>
      {/* Search Bar */}
      <div className="header__searchBar">
        <div className="header__searchBarContainer">
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      {/* Menu Items */}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
