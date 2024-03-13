import React from "react";
import { Typography, SxProps, Paper } from "@mui/material";

export const getTitleStyle = (): SxProps => ({
  typography: "h3",
  textAlign: "center",
  paddingTop: "3%",
  fontWeight: "600",
  fontFamily: "Kanit",
});

export const getSubtitleStyle = (): SxProps => ({
  typography: "subtitle1",
  textAlign: "center",
  fontWeight: "400",
  fontFamily: "Kanit",
});

export const StyledContainer = (props) => {
  return (
    <Paper
      sx={{
        margin: "2% 10% 2% 10%",
        padding: "1.5%",
        borderRadius: "32px",
        background: `linear-gradient(to right, #089CD4, #5DE2EE)`,
        "> div:first-child": {
          justifyContent: "space-between",
          paddingRight: "1%",
        },
        "> div": {
          display: "flex",
        },
      }}
      elevation={5}
      {...props}
    />
  );
};

export const StyledTypography = (props) => {
  return (
    <Typography
      variant="h6"
      fontWeight="500"
      fontFamily="Kanit"
      color="white"
      sx={{ paddingBottom: "2%" }}
      {...props}
    />
  );
};
