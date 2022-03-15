import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import {
  Container,
  Box,
  CardBody,
  Image,
  Heading,
  TextContent,
  Button,
} from "./CharacterScreenStyled";
import { CharactersContext } from "../../context/CharactersContext";
import { CharactersPagination } from "./CharactersPagination";

export const Characters = () => {
  const { loading, error, characters } = useContext(CharactersContext);

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  return (
    <>
      <Container>
        {characters.map((character) => (
          <Box key={character.id}>
            <Image src={character.image} alt={character.name} />
            <TextContent>
              <Heading>
                <h3>{character.name}</h3>
              </Heading>
              <CardBody>
                <h4>Estado: {character.status}</h4>
                <h4>Especie: {character.species}</h4>
                <Link to={`/character/${character.id}`}>
                  <Button>Ver Personaje</Button>
                </Link>
              </CardBody>
            </TextContent>
          </Box>
        ))}
      </Container>
      <CharactersPagination />
    </>
  );
};
