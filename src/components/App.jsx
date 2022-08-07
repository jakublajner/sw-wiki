import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Characters from '../features/characters/Characters';
import CharacterDetail from '../features/characterDetail/CharacterDetail';
import PlanetDetail from '../features/planetDetail/PlanetDetail';
import StarshipDetail from '../features/starshipDetail/StarshipDetail';
import NotFound from './NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Characters />} />
        <Route path="/character/:characterId" element={<CharacterDetail />} />
        <Route path="/planet/:planetId" element={<PlanetDetail />} />
        <Route path="/starship/:starshipId" element={<StarshipDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Layout>
  );
};

export default App;
