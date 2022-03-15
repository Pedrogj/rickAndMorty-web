import React, { useContext } from "react";
import { Spinner } from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { Wrapper, Content, Button } from "./EpisodeStyled";
import { EpisodesContext } from "../../context/EpisodesContext";
import { EpisodesPagination } from "./EpisodesPagination";

export const EpisodesScreen = () => {
  const { loading, error, episodes } = useContext(EpisodesContext);

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  return (
    <>
      <Wrapper>
        {episodes.map((episode) => (
          <Content key={episode.id}>
            <Link to={`/episode/${episode.id}`}>
              <Button>
                {episode.id}. {episode.name}
              </Button>
            </Link>
          </Content>
        ))}
      </Wrapper>
      <EpisodesPagination />
    </>
  );
};
