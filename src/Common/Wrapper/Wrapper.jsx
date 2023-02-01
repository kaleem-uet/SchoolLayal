import { Box, styled } from "@mui/material";
import React from "react";

export const Wrapper = styled(Box)(({ theme, color }) => ({
  width: "auto",
  height: "auto",
  padding: 20,
  backgroundColor: color,
  display: "flex",
  alignItems: "center",
}));

export const BtnWrapper = styled("div")(({ theme }) => ({
  width: "137px",
  height: "auto",
  // padding:15,
  padding: "15px 15px",
  border: "1px solid #E6E6E6",
  // borderRadius: "0px 5px 5px 0px",
  backgroundColor: "#FF6551",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#ed7868",
  },
}));
export const HeroWrapper = styled(Box)(({ theme,}) => ({
position:'relative'
}));
