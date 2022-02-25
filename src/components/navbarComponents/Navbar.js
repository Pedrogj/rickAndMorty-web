import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Wrapper,
  Content,
  NavLogo,
  MenuIcon,
  ImgLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyled";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const Collapse = click ? <FaTimes /> : <FaBars />;

  return (
    <>
      <Wrapper>
        <Content>
          <Link to="/">
            <NavLogo>
              <ImgLogo src="./assets/logo.png" />
              RICK AND MORTY
            </NavLogo>
          </Link>
          <MenuIcon onClick={() => handleClick()}>{Collapse}</MenuIcon>
          <NavMenu click={click}>
            <Link to="/">
              <NavItem onClick={() => handleClick()}>
                <NavLinks>Home</NavLinks>
              </NavItem>
            </Link>
            <Link to="/characters">
              <NavItem onClick={() => handleClick()}>
                <NavLinks>Characters</NavLinks>
              </NavItem>
            </Link>
            <Link to="/episodes">
              <NavItem onClick={() => handleClick()}>
                <NavLinks>Episodes</NavLinks>
              </NavItem>
            </Link>
          </NavMenu>
        </Content>
      </Wrapper>
    </>
  );
};
