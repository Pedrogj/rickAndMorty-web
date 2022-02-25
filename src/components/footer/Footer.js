import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FooterNav, Container, Logo, Img, Text } from "./FooterStyled";

export const Footer = () => {
  return (
    <FooterNav className="footer">
      <Container className="container">
        <Logo className="logo">
          <Img src="./assets/logo.png" />
        </Logo>
        <Text className="text">
          <BiCodeAlt />
          By Pedro Perez
        </Text>
      </Container>
    </FooterNav>
  );
};
