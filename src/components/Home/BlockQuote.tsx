import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  quote: string;
}

const RectangleContainer = styled(Box)(() => ({
  width: "100%",
  paddingBottom: "60%",
  position: "relative",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
}));

const FlexContainer = styled(Stack)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "0px 15%",
}));

const BlockQuote: React.FC<Props> = ({ quote }) => (
  <RectangleContainer>
    <FlexContainer justifyContent="center" alignItems="center">
      <Typography variant="body1" component="p">
        {quote}
      </Typography>
    </FlexContainer>
  </RectangleContainer>
);

export default BlockQuote;
