import React, { useEffect } from "react";

import MainGridLayout from "./layouts/MainGrid/MainGridLayout";

import Blocks from "./components/Home/Blocks";

import "./App.css";

function App() {
  useEffect(() => {
    window.dataLayer = [];
  }, []);

  return (
    <MainGridLayout>
      <Blocks />
    </MainGridLayout>
  );
}

export default App;
