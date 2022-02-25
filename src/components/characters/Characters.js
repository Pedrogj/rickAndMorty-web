import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
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
import { Pagination } from "../pagination/Pagination";

import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
  query getCharacters($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
        species
      }
    }
  }
`;

export const Characters = ({ searchTerm }) => {
  // Page Count State
  const [pageState, setPageState] = useState(0);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: searchTerm, page: pageState },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  // data characters
  const characters = data.characters.results;

  // data info
  const prev = data?.characters.info.prev;
  const next = data?.characters.info.next;

  // Function pagination
  const onPrev = () => {
    setPageState(prev);
  };

  const onNext = () => {
    setPageState(next);
  };

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
      <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} />
    </>
  );
};
