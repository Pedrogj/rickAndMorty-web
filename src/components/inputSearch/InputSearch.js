import React, { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import { Input } from "./InputSearchStyled";

export const InputSearch = () => {
  const { seacrhOnchange } = useContext(CharactersContext);
  return (
    <Input type="text" placeholder="Buscar..." onChange={seacrhOnchange} />
  );
};
