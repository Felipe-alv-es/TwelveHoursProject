import React from "react";
import { Typography, Paper } from "@mui/material";

export const StyledContainer = (props) => {
  return (
    <Paper
      sx={{
        margin: "2% 10% 2% 10%",
        padding: "1.5%",
        borderRadius: "32px",
        background: `linear-gradient(to right, #089CD4, #5DE2EE)`,
        "> div:first-of-type": {
          justifyContent: "space-between",
          paddingRight: "1%",
        },
        "> div": {
          display: "flex",
        },
      }}
      elevation={10}
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
      whiteSpace="nowrap"
      sx={{ paddingBottom: "2%" }}
      {...props}
    />
  );
};

export const StyledSubtitle = (props) => {
  return (
    <Typography
      variant="body2"
      fontWeight="300"
      fontFamily="Kanit"
      paddingLeft="3%"
      whiteSpace="nowrap"
      paddingBottom="1.2%"
      alignSelf="center"
      color="white"
      fontStyle="italic"
      {...props}
    />
  );
};
