import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Character from './pages/Character.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import MapAceh from './pages/kota/aceh/mapAceh.jsx';
import Aceh from './pages/kota/aceh/Aceh.jsx';
import RestoranAceh from './pages/kota/aceh/restoranAceh.jsx';
import MuseumAceh from './pages/kota/aceh/museumAceh.jsx';
import MapMedan from './pages/kota/medan/mapMedan.jsx';
import Medan from './pages/kota/medan/Medan.jsx';
import RestoranMedan from './pages/kota/medan/restoranMedan.jsx';
import MuseumMedan from './pages/kota/medan/museumMedan.jsx';
import MapPadang from './pages/kota/padang/mapPadang.jsx';
import Padang from './pages/kota/padang/Padang.jsx';
import RestoranPadang from './pages/kota/padang/restoranPadang.jsx';
import MuseumPadang from './pages/kota/padang/museumPadang.jsx';
import MapPekanbaru from './pages/kota/pekanbaru/mapPekanbaru.jsx';
import Pekanbaru from './pages/kota/pekanbaru/Pekanbaru.jsx';
import RestoranPekanbaru from './pages/kota/pekanbaru/restoranPekanbaru.jsx';
import MuseumPekanbaru from './pages/kota/pekanbaru/museumPekanbaru.jsx';
import MapPalembang from './pages/kota/palembang/mapPalembang.jsx';
import Palembang from './pages/kota/palembang/Palembang.jsx';
import RestoranPalembang from './pages/kota/palembang/restoranPalembang.jsx';
import MuseumPalembang from './pages/kota/palembang/museumPalembang.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PTI-BURUNG/" element={<Login />} />
        <Route path="/PTI-BURUNG/Character" element={<Character />} />
        <Route path="/PTI-BURUNG/" element={<AboutUs />} />
        <Route path="/PTI-BURUNG/" element={<MapAceh />} />
        <Route path="/PTI-BURUNG/" element={<Aceh />} />
        <Route path="/PTI-BURUNG/" element={<RestoranAceh />} />
        <Route path="/PTI-BURUNG/" element={<MuseumAceh />} />
        <Route path="/PTI-BURUNG/" element={<MapMedan />} />
        <Route path="/PTI-BURUNG/" element={<Medan />} />
        <Route path="/PTI-BURUNG/" element={<RestoranMedan />} />
        <Route path="/PTI-BURUNG/" element={<MuseumMedan />} />
        <Route path="/PTI-BURUNG/" element={<MapPadang />} />
        <Route path="/PTI-BURUNG/" element={<Padang />} />
        <Route path="/PTI-BURUNG/" element={<RestoranPadang />} />
        <Route path="/PTI-BURUNG/" element={<MuseumPadang />} />
        <Route path="/PTI-BURUNG/" element={<MapPekanbaru />} />
        <Route path="/PTI-BURUNG/" element={<Pekanbaru />} />
        <Route path="/PTI-BURUNG/" element={<RestoranPekanbaru />} />
        <Route path="/PTI-BURUNG/" element={<MuseumPekanbaru />} />
        <Route path="/PTI-BURUNG/" element={<MapPalembang />} />
        <Route path="/PTI-BURUNG/" element={<Palembang />} />
        <Route path="/PTI-BURUNG/" element={<RestoranPalembang />} />
        <Route path="/PTI-BURUNG/" element={<MuseumPalembang />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;