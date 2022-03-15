import React from "react";
import { Routes, Route } from "react-router-dom";
import { CharacterDetails } from "../components/characterDetails/CharacterDetails";
import { CharactersScreen } from "../components/characters/CharactersScreen";
import { EpisodeDetails } from "../components/episodeDetails.js/EpisodeDetails";
import { EpisodesScreen } from "../components/episodes/EpisodesScreen";
import { Footer } from "../components/footer/Footer";
import { HomeScreen } from "../components/home/HomeScreen";
import { Navbar } from "../components/navbarComponents/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="characters" element={<CharactersScreen />} />
        <Route path="character/:characterId" element={<CharacterDetails />} />

        <Route path="episodes" element={<EpisodesScreen />} />
        <Route path="episode/:episodeId" element={<EpisodeDetails />} />

        <Route path="*" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </>
  );
};
