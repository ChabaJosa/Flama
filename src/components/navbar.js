import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk  */}
        <Link to="">
          {/* <img src={Logo} alt="store" className="navbar brand"></img> */}
          <div className="fire">
            <div className="fire-left">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-main">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-right">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-bottom">
              <div className="main-fire"></div>
            </div>
          </div>
          {" "}
        </Link>

        {/* <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <span id="topProduct">Products</span>
            </Link>
          </li>
        </ul> */}

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span >
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: capitaliza;
  }
`;
