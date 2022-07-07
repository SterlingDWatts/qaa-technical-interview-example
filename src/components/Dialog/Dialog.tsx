import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MUIDialog from "@mui/material/Dialog";

import CloseIcon from "@mui/icons-material/Close";

import NameScreen from "./NameScreen";
import FavNumberScreen from "./FavNumberScreen";
import FinalScreen from "./FinalScreen";

const Dialog = () => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [favNumber, setFavNumber] = useState("");
  const [screen, setScreen] = useState(0);
  const [nameNextDisabled, setNameNextDisabled] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  let currentScreen: JSX.Element;

  switch (screen) {
    case 0:
      currentScreen = (
        <NameScreen
          name={name}
          screen={screen}
          nameNextDisabled={nameNextDisabled}
          setName={setName}
          setScreen={setScreen}
          setNameNextDisabled={setNameNextDisabled}
        />
      );
      break;
    case 1:
      currentScreen = (
        <FavNumberScreen
          favNumber={favNumber}
          name={name}
          screen={screen}
          setFavNumber={setFavNumber}
          setScreen={setScreen}
        />
      );
      break;
    case 2:
      currentScreen = (
        <FinalScreen
          name={name}
          favNumber={favNumber}
          screen={screen}
          setOpen={setOpen}
          setScreen={setScreen}
        />
      );
      break;
    default:
      currentScreen = (
        <NameScreen
          name={name}
          screen={screen}
          nameNextDisabled={nameNextDisabled}
          setName={setName}
          setScreen={setScreen}
          setNameNextDisabled={setNameNextDisabled}
        />
      );
      break;
  }

  if (localStorage.getItem("show-survey") !== "true") {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gridColumnEnd: {
            xs: "span 4",
            md: "span 8",
            lg: "span 12",
          },
          order: {
            xs: -2,
            md: "initial",
          },
        }}
      >
        <Button variant="contained" onClick={() => setOpen(true)}>
          GETING TO KNOW YOU SURVEY
        </Button>
      </Box>
      <MUIDialog open={open} onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {currentScreen}
      </MUIDialog>
    </>
  );
};

export default Dialog;
