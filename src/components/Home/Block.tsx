import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

interface Props {
  children: React.ReactNode;
  size?: "lg";
  order?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  onClick?: () => void;
}

interface StyledBlockProps extends ButtonBaseProps {
  size?: "lg";
  order?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

const StyledBlock = styled(ButtonBase)<StyledBlockProps>(
  ({ theme, size, order }) => ({
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      gridColumnEnd: "span 4",
      gridRowEnd: "span 1",
      order: order?.xs || 0,
    },
    [theme.breakpoints.up("sm")]: {
      order: order?.sm || 0,
    },
    [theme.breakpoints.up("md")]: {
      gridColumnEnd: size === "lg" ? "span 2" : "span 3",
      gridRowEnd: size === "lg" ? "span 2" : "span 1",
      order: order?.md || 0,
    },
    [theme.breakpoints.up("lg")]: {
      gridColumnEnd: "span 4",
      order: order?.lg || 0,
    },
    [theme.breakpoints.up("xl")]: {
      order: order?.xl || 0,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.2,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        textDecoration: "underline",
      },
    },
  })
);

const Block: React.FC<Props> = ({ children, size, order, ...props }) => (
  <StyledBlock focusRipple size={size} order={order} {...props}>
    {children}
  </StyledBlock>
);

export default Block;
