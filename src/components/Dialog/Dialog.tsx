import React, { useContext } from "react";

import IconButton from "@mui/material/IconButton";
import MUIDialog from "@mui/material/Dialog";

import CloseIcon from "@mui/icons-material/Close";

import Block from "../Home/Block";
import BlockImage from "../Home/BlockImage";
import BlockLocation from "../Home/BlockLocation";
import NameScreen from "./NameScreen";
import FavNumberScreen from "./FavNumberScreen";
import FinalScreen from "./FinalScreen";

import { Context } from "../../contexts/dialogContext";

const Dialog = () => {
  const context = useContext(Context);

  let CurrentScreen = NameScreen;

  switch (context?.state.screen) {
    case 0:
      CurrentScreen = NameScreen;
      break;
    case 1:
      CurrentScreen = FavNumberScreen;
      break;
    case 2:
      CurrentScreen = FinalScreen;
      break;
    default:
      CurrentScreen = NameScreen;
      break;
  }

  return (
    <>
      <Block onClick={() => context?.setOpen(true)}>
        <BlockImage imgId={1025} />
        <BlockLocation location="GETING TO KNOW YOU SURVEY" />
      </Block>

      <MUIDialog
        open={context?.state.open || false}
        onClose={() => context?.setOpen(false)}
      >
        <IconButton
          aria-label="close"
          onClick={() => context?.setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <CurrentScreen />
      </MUIDialog>
    </>
  );
};

export default Dialog;
