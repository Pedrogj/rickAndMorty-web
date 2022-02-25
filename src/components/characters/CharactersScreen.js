import React, { useState } from "react";

import { InputSearch } from "../inputSearch/InputSearch";
import { Characters } from "./Characters";

import { Text, Content } from "./CharacterScreenStyled";

export const CharactersScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const seacrhOnchange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Content>
        <Text>
          <h1>Personajes</h1>
        </Text>
        <InputSearch seacrhOnchange={seacrhOnchange} />
      </Content>
      <Characters searchTerm={searchTerm} />
    </>
  );
};
