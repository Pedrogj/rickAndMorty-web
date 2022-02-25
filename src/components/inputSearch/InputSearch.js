import React from "react";
import { Input } from "./InputSearchStyled";

export const InputSearch = ({ seacrhOnchange }) => {
  return (
    <Input type="text" placeholder="Buscar..." onChange={seacrhOnchange} />
  );
};
