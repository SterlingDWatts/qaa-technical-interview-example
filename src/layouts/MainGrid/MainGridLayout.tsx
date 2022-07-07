import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import HorizontalNavBar from "./HorizontalNavBar";

interface Props {
  children: React.ReactNode;
}

const Grid = styled(Container)(() => ({
  display: "grid",
  columnGap: "16px",
  rowGap: "16px",
  padding: "0px",
}));

const MainGridLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
        QA FORM
      </Typography>

      <HorizontalNavBar />

      <Box maxWidth="lg" sx={{ margin: "0px auto" }}>
        <Grid
          sx={{
            gridTemplateColumns: {
              xs: "1fr 1fr 1fr 1fr",
              sm: "1fr 1fr 1fr 1fr",
              md: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            },
          }}
        >
          {children}
        </Grid>
      </Box>
    </>
  );
};

export default MainGridLayout;
