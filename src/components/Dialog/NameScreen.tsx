import React, { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  screen: number;
  nameNextDisabled: boolean;
  setName: (name: string) => void;
  setScreen: (screenNumber: number) => void;
  setNameNextDisabled: (isDisabled: boolean) => void;
}

const NameScreen: React.FC<Props> = ({
  name,
  screen,
  nameNextDisabled,
  setName,
  setScreen,
  setNameNextDisabled,
}) => {
  useEffect(() => {
    setName("");
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(e.target.value);
    setNameNextDisabled(!value);
  };

  const handleNextClick = () => {
    window.dataLayer.push({
      id: uuidv4(),
      module: "Get to know you dialog",
      screen,
      event: "Next clicked",
      data: JSON.stringify({ name }),
    });
    setScreen(screen + 1);
  };

  return (
    <>
      <DialogTitle>Hello!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let&apos;s get to know each other. What is your name?
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="First Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={handleNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNextClick} disabled={nameNextDisabled}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export default NameScreen;
