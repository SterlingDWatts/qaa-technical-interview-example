import React, { useContext } from "react";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Context } from "../../contexts/dialogContext";

import { pushToDataLayer } from "../../utils/utils";

const FinalScreen = () => {
  const context = useContext(Context);
  const message =
    context?.state.favNumber === "3"
      ? `That's cool! 3 is my favorite number as well. Have a great day ${context?.state.name}.`
      : `My favorite number is 3, but ${context?.state.favNumber} is a pretty cool number too! Have a great day ${context?.state.name}.`;

  const handlePrevClick = () => {
    pushToDataLayer("Get to know you dialog", "Prev clicked", null, {
      screen: context?.state.screen,
    });
    context?.setScreen(context?.state.screen - 1);
  };

  const handleCloseClick = () => {
    pushToDataLayer("Get to know you dialog", "Close clicked", null, {
      screen: context?.state.screen,
    });
    context?.setOpen(false);
  };

  return (
    <>
      <DialogTitle>Thanks for sharing, {context?.state.name}!</DialogTitle>
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
