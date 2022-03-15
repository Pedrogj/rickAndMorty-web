import { useState, createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../helpers/getData";

export const EpisodesContext = createContext();

export const ContextEpisodesProvider = ({ children }) => {
  const [pageState, setPageState] = useState(0);

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: pageState },
  });

  // data episodes
  const episodes = data?.episodes.results;

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
  const dataEpisodes = { loading, error, episodes, onPrev, onNext, prev, next };

  return (
    <EpisodesContext.Provider value={dataEpisodes}>
      {children}
    </EpisodesContext.Provider>
  );
};
