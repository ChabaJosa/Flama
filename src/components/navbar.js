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
          <div class="fire">
            <div class="fire-left">
              <div class="main-fire"></div>
              <div class="particle-fire"></div>
            </div>
            <div class="fire-main">
              <div class="main-fire"></div>
              <div class="particle-fire"></div>
            </div>
            <div class="fire-right">
              <div class="main-fire"></div>
              <div class="particle-fire"></div>
            </div>
            <div class="fire-bottom">
              <div class="main-fire"></div>
            </div>
          </div>
          {" "}
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span>
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitaliza;
  }
`;
