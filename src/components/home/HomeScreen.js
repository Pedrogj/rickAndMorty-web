import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HomeImg,
  HomeText,
  Img,
  Row,
  Section,
  ImgBox,
  Text,
  Title,
  Button,
} from "./HomeStyled";

export const HomeScreen = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <HomeText>
              <Title className="title">Challeng Rick and Morty Web</Title>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <Link to="/episodes">
                <Button>Episodios</Button>
              </Link>
            </HomeText>
            <HomeImg>
              <ImgBox>
                <Img src="./assets/imgHome.png" alt="rick-morty" />
              </ImgBox>
            </HomeImg>
          </Row>
        </Container>
      </Section>
    </>
  );
};
