import React, { useContext } from "react";
import { EpisodesContext } from "../../context/EpisodesContext";
import { Nav, Button } from "../pagination/PaginationStyled";

export const EpisodesPagination = () => {
  const { onPrev, onNext, prev, next } = useContext(EpisodesContext);

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
