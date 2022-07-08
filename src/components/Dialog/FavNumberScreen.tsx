import React, { useContext } from "react";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { Context } from "../../contexts/dialogContext";

import { pushToDataLayer } from "../../utils/utils";

const FavNumberScreen = () => {
  const context = useContext(Context);

  const handleNextClick = () => {
    pushToDataLayer(
      "Get to know you dialog",
      "Next clicked",
      { favNumber: context?.state.favNumber },
      { screen: context?.state.screen }
    );
    context?.setScreen(context?.state.screen + 1);
  };

  const handlePrevClick = () => {
    pushToDataLayer("Get to know you dialog", "Prev clicked", null, {
      screen: context?.state.screen,
    });
    context?.setScreen(context?.state.screen - 1);
  };

  return (
    <>
      <DialogTitle>Nice to meet you {context?.state.name}!</DialogTitle>
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
          value={context?.state.favNumber}
          onChange={(e) => context?.setFavNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick} disabled={!context?.state.favNumber}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default FavNumberScreen;
