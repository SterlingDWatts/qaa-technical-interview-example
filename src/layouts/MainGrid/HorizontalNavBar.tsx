import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const HorizontalNavBar = () => (
  <Stack
    sx={{ display: { xs: "none", sm: "flex" }, padding: "16px" }}
    direction="row"
    spacing={2}
    justifyContent="center"
  >
    <MenuItem>HOME</MenuItem>
    <MenuItem>ABOUT</MenuItem>
    <MenuItem>CONTACT</MenuItem>
    <MenuItem>OTHER</MenuItem>
  </Stack>
);

export default HorizontalNavBar;
