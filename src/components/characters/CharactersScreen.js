import React from "react";

import { InputSearch } from "../inputSearch/InputSearch";
import { Characters } from "./Characters";

import { Text, Content } from "./CharacterScreenStyled";

export const CharactersScreen = () => {
  return (
    <>
      <Content>
        <Text>
          <h1>Personajes</h1>
        </Text>
        <InputSearch />
      </Content>
      <Characters />
    </>
  );
};
