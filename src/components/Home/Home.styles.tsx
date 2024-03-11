import React from "react";
import { SxProps } from "@mui/material/";
import { Typography } from "@mui/material";

export const getContentStyle = (): SxProps => ({
  background: "lightBlue",
  margin: "3%",
  padding: "0% 3% 0% 3%",
  "> div": {
    display: "flex",
    background: "lightGreen",
    padding: "1% 0% 1% 0%",
  },
});

export const getTitleStyle = (): SxProps => ({
  typography: "h4",
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: "3%",
});

export const StyledTypography = (props) => {
  return <Typography variant="h5" fontWeight="bold" {...props} />;
};
