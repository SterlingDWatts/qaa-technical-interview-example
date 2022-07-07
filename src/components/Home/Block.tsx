import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
  size?: "lg";
}

const StyledBlock = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Block: React.FC<Props> = ({ children, size }) => (
  <StyledBlock
    sx={{
      gridColumnEnd: {
        xs: "span 4",
        md: size === "lg" ? "span 2" : "span 3",
        lg: "span 4",
      },
      gridRowEnd: {
        xs: "span 1",
        md: size === "lg" ? "span 2" : "span 1",
      },
      order: {
        xs: size === "lg" ? -2 : "initial",
        md: "initial",
      },
    }}
  >
    {children}
  </StyledBlock>
);

export default Block;
