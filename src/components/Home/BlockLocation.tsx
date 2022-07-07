import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  location: string;
}

const BlockLocation: React.FC<Props> = ({ location }) => (
  <Box sx={{ width: "100%", padding: "15px", textAlign: "center" }}>
    <Typography variant="h6" component="h4">
      {location}
    </Typography>
  </Box>
);

export default BlockLocation;
