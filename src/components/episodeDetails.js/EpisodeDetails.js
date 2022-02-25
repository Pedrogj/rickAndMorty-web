import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import {
  Content,
  Box,
  Image,
  TextContent,
  Heading,
  CardBody,
  Title,
  Text,
  Button,
} from "./EpisodeDetailsStyled";

const GET_EPISODE = gql`
  query GetEpisodeID($id: ID!) {
    episode(id: $id) {
      id
      name
      characters {
        id
        name
        image
        status
        species
      }
    }
  }
`;

export const EpisodeDetails = () => {
  const { episodeId } = useParams();

  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id: episodeId },
  });

  const episode = data?.episode;

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  return (
    <>
      <Title className="Title">
        <Text className="Text">
          <h2>
            Episodio #{episode.id}: {episode.name}
          </h2>
        </Text>
        <Link to="/episodes">
          <Button>Episodios</Button>
        </Link>
      </Title>
      <Content>
        {episode.characters.map((character) => (
          <Box key={character.id}>
            <Image src={character.image} alt={character.name} />
            <TextContent>
              <Heading className="Heading">
                <h3>{character.name}</h3>
              </Heading>
              <CardBody className="CardBody">
                <h4>Estado: {character.status}</h4>
                <h4>Especie: {character.species}</h4>
              </CardBody>
            </TextContent>
          </Box>
        ))}
      </Content>
    </>
  );
};
