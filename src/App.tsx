import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AcceptanceCriteriaPage from "./pages/AcceptanceCriteriaPage";

import "./App.css";

function App() {
  useEffect(() => {
    window.dataLayer = [];
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="acceptance-criteria" element={<AcceptanceCriteriaPage />} />
    </Routes>
  );
}

export default App;
