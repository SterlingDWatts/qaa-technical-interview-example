import React from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface Props {
  favNumber: string;
  name: string;
  screen: number;
  setFavNumber: (number: string) => void;
  setScreen: (screenNumber: number) => void;
}

const FavNumberScreen: React.FC<Props> = ({
  favNumber,
  name,
  screen,
  setFavNumber,
  setScreen,
}) => {
  const handleNextClick = () => {
    window.dataLayer.push({
      id: uuidv4(),
      module: "Get to know you dialog",
      screen,
      event: "Next clicked",
      data: JSON.stringify({ favNumber }),
    });
    setScreen(screen + 1);
  };

  const handlePrevClick = () => {
    window.dataLayer.push({
      id: uuidv4(),
      module: "Get to know you dialog",
      screen,
      event: "Prev clicked",
    });
    setScreen(screen - 1);
  };

  return (
    <>
      <DialogTitle>Nice to meet you {name}!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          What is your favorite single digit integer?
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="favNumber"
          type="text"
          fullWidth
          variant="standard"
          value={favNumber}
          onChange={(e) => setFavNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick} disabled={!favNumber}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default FavNumberScreen;
