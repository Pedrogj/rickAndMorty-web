import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { Pagination } from "../pagination/Pagination";
import { Wrapper, Content, Button } from "./EpisodeStyled";

const GET_EPISODES = gql`
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

export const EpisodesScreen = () => {
  const [pageState, setPageState] = useState(0);

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: pageState },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Lo sentimos, El personaje no esta disponible</p>;

  // data episodes
  const episodes = data.episodes.results;

  //data info episodes
  const prev = data?.episodes.info.prev;
  const next = data?.episodes.info.next;

  // Function pagination
  const onPrev = () => {
    setPageState(prev);
  };

  const onNext = () => {
    setPageState(next);
  };

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
      <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} />
    </>
  );
};
