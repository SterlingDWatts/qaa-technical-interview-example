import React from "react";
import { styled } from "@mui/material/styles";

import Box, { BoxProps } from "@mui/material/Box";

interface ImageContainerProps extends BoxProps {
  size?: "lg";
  height: string;
  imgId: number;
}

interface Props {
  imgId: number;
  size?: "lg";
}

const ImageContainer = styled(Box)<ImageContainerProps>(({ theme, size }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    paddingBottom: "50%",
  },
  [theme.breakpoints.up("md")]: {
    paddingBottom:
      size === "lg"
        ? "calc(((100% - 16px) / 2 * 3 + 32px) * 1.2 + 78px)"
        : "60%",
  },
  [theme.breakpoints.up("lg")]: {
    paddingBottom: size === "lg" ? "calc(120% + 78px)" : "60%",
  },
}));

const Image = styled(Box)<ImageContainerProps>(({ height, imgId }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(https://picsum.photos/id/${imgId}/600/${height}.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 1)",
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

const BlockImage: React.FC<Props> = ({ imgId, size }) => {
  return (
    <ImageContainer size={size} height={size ? "1200" : "360"} imgId={imgId}>
      <Image size={size} height={size ? "1200" : "360"} imgId={imgId} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
    </ImageContainer>
  );
};

export default BlockImage;
