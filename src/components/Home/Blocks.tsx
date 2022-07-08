import React from "react";
import Block from "./Block";
import BlockImage from "./BlockImage";
import BlockLocation from "./BlockLocation";
import BlockQuote from "./BlockQuote";
import Dialog from "../Dialog/Dialog";

import useShowSurvey from "../../hooks/useShowSurvey";

const Blocks = () => {
  const showSurvey = useShowSurvey();

  return (
    <>
      <Block>
        <BlockImage imgId={101} />
        <BlockLocation location="TEMPORT INCIDIDUNT" />
      </Block>
      <Block order={{ xs: -1, sm: -1 }}>
        <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
      </Block>
      <Block size="lg" order={{ xs: -3, sm: -3 }}>
        <BlockImage imgId={1080} size="lg" />
        <BlockLocation location="DOLORE MAGNA" />
      </Block>
      {showSurvey ? (
        <Dialog />
      ) : (
        <Block>
          <BlockImage imgId={1069} />
          <BlockLocation location="MINIM VENIAM" />
        </Block>
      )}

      <Block>
        <BlockImage imgId={1040} />
        <BlockLocation location="NOSTRUD EXERCITATION" />
      </Block>
    </>
  );
};

export default Blocks;
