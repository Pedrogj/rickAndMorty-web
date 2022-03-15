import React from "react";
import { ContextProvider } from "./context/CharactersContext";
import { ContextEpisodesProvider } from "./context/EpisodesContext";

import { AppRouter } from "./routers/AppRouter";

export const RickMortyApp = () => {
  return (
    <ContextProvider>
      <ContextEpisodesProvider>
        <AppRouter />
      </ContextEpisodesProvider>
    </ContextProvider>
  );
};
