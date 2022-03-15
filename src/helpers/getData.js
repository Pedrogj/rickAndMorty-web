import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
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

export const GET_CHARACTER = gql`
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

export const GET_EPISODE = gql`
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

export const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;
