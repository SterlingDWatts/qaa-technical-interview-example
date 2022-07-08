import React, { useContext, useEffect } from "react";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { Context } from "../../contexts/dialogContext";

import { pushToDataLayer } from "../../utils/utils";

const NameScreen = () => {
  const context = useContext(Context);

  useEffect(() => {
    context?.setName("");
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    context?.setName(e.target.value);
    context?.setNameScreenNextDisabled(!value);
  };

  const handleNextClick = () => {
    pushToDataLayer(
      "Get to know you dialog",
      "Next clicked",
      { name: context?.state.name },
      { screen: context?.state.screen }
    );
    context?.setScreen(context?.state.screen + 1);
  };

  return (
    <>
      <DialogTitle>Hello!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lets get to know each other. What&apos;s your name?
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="First Name"
          type="text"
          fullWidth
          variant="standard"
          value={context?.state.name}
          onChange={handleNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleNextClick}
          disabled={context?.state.nameScreenNextDisabled}
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default NameScreen;
