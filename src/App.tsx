import React, { useEffect } from "react";

import MainGridLayout from "./layouts/MainGrid/MainGridLayout";

import Dialog from "./components/Dialog/Dialog";
import Blocks from "./components/Home/Blocks";

import "./App.css";

function App() {
  useEffect(() => {
    window.dataLayer = [];
  }, []);

  return (
    <MainGridLayout>
      <Blocks />
      <Dialog />
    </MainGridLayout>
  );
}

export default App;
