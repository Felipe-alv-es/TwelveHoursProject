import React from "react";
import { SxProps } from "@mui/material/";
import { Typography } from "@mui/material";

export const getContentStyle = (): SxProps => ({
  margin: "2% 3% 2% 3%",
  padding: "1.5%",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "32px",
  "> div:first-child": {
    justifyContent: "space-between",
    paddingRight: "1%",
  },
  "> div": {
    display: "flex",
  },
});

export const getTitleStyle = (): SxProps => ({
  typography: "h4",
  textAlign: "center",
  paddingTop: "3%",
  fontWeight: "600",
  fontFamily: "Kanit",
});

export const StyledTypography = (props) => {
  return (
    <Typography variant="h6" fontWeight="600" fontFamily="Kanit" {...props} />
  );
};
