import { useState, createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../helpers/getData";

export const CharactersContext = createContext();

export const ContextProvider = ({ children }) => {
  // Page Count State
  const [pageState, setPageState] = useState(0);

  // SearchTerm State
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: searchTerm, page: pageState },
  });

  // data characters
  const characters = data?.characters.results;

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

  // SearchTerm

  const seacrhOnchange = (e) => {
    setSearchTerm(e.target.value);
  };

  const dataCharacters = {
    loading,
    error,
    characters,
    onPrev,
    onNext,
    prev,
    next,
    seacrhOnchange,
  };
  return (
    <CharactersContext.Provider value={dataCharacters}>
      {children}
    </CharactersContext.Provider>
  );
};
