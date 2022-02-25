import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import {
  Wrapper,
  Details,
  Box,
  Img,
  Button,
  Text1,
  Text2,
} from "./CharacterDetailStyled";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      created
    }
  }
`;

export const CharacterDetails = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/characters");
  };

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  return (
    <Wrapper>
      <Details>
        <Img src={data.character.image} />
        <Box>
          <Text1>{data.character.name}</Text1>
          <Text2>Estado: {data.character.status}</Text2>
          <Text2>Especie: {data.character.species}</Text2>
          <Text2>Genero: {data.character.gender}</Text2>
          <Text2>Creado: {data.character.created}</Text2>

          <Button onClick={handleReturn}>Regresar</Button>
        </Box>
      </Details>
    </Wrapper>
  );
};
