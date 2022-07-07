import React from "react";
import Box from "@mui/material/Box";
import Block from "./Block";
import BlockImage from "./BlockImage";
import BlockLocation from "./BlockLocation";
import BlockQuote from "./BlockQuote";

const Blocks = () => (
  <>
    <Block>
      <BlockImage imgId={101} />
      <BlockLocation location="TEMPORT INCIDIDUNT" />
    </Block>
    <Block>
      <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
    </Block>
    <Block size="lg">
      <Box sx={{ display: { xs: "none", md: "initial" } }}>
        <BlockImage imgId={102} size="lg" />
      </Box>
      <Box sx={{ display: { xs: "initial", md: "none" } }}>
        <BlockImage imgId={102} />
      </Box>
      <BlockLocation location="DOLORE MAGNA" />
    </Block>
    <Block>
      <BlockImage imgId={1025} />
      <BlockLocation location="MINIM VENIAM" />
    </Block>
    <Block>
      <BlockImage imgId={1040} />
      <BlockLocation location="NOSTRUD EXERCITATION" />
    </Block>
  </>
);

export default Blocks;
