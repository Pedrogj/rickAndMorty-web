import React, { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import { Nav, Button } from "../pagination/PaginationStyled";

export const CharactersPagination = () => {
  const { onPrev, onNext, prev, next } = useContext(CharactersContext);

  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Nav>
      {prev ? <Button onClick={handlePrev}>Anterior</Button> : null}
      {next ? <Button onClick={handleNext}>Siguiente</Button> : null}
    </Nav>
  );
};
