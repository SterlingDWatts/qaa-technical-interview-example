import React from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  name: string;
  favNumber: string;
  screen: number;
  setScreen: (number: number) => void;
  setOpen: (isOpen: boolean) => void;
}

const FinalScreen: React.FC<Props> = ({
  name,
  favNumber,
  screen,
  setScreen,
  setOpen,
}) => {
  const message =
    favNumber === "3"
      ? `That's cool! 3 is my favorite number as well. Have a great day ${name}.`
      : `My favorite number is 3, but ${favNumber} is a pretty cool number too! Have a great day ${name}.`;

  const handlePrevClick = () => {
    window.dataLayer.push({
      id: uuidv4(),
      module: "Get to know you dialog",
      screen,
      event: "Prev clicked",
    });
    setScreen(screen - 1);
  };

  const handleCloseClick = () => {
    window.dataLayer.push({
      id: uuidv4(),
      module: "Get to know you dialog",
      screen,
      event: "Close clicked",
    });
    setOpen(false);
  };

  return (
    <>
      <DialogTitle>Thanks for sharing, {name}!</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleCloseClick}>Close</Button>
      </DialogActions>
    </>
  );
};

export default FinalScreen;
