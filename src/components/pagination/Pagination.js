import React from "react";
import { Nav, Button } from "./PaginationStyled";

export const Pagination = ({ prev, next, onPrev, onNext }) => {
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
