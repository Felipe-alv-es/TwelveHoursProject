import React from "react";
import { Typography, Paper } from "@mui/material";
import { TaskGroupProps } from "./TaskGroup.types";

export const StyledContainer = (props) => {
  const { completed, ...rest } = props;
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
      {...rest}
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

export const taskGroupBackFace = () => ({
  background: "green",
  position: "absolute",
  width: "80%",
  height: "100%",
  margin: "0% 10% 0% 10%",
  borderRadius: "32px",
  backfaceVisibility: "visible",
  transform: "rotateX(180deg)",
  zIndex: "-1",
  top: 0,
});

export const getSwipeAnimation = (completed: TaskGroupProps["completed"]) => ({
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 2s",
  backfaceVisibility: "hidden",
  perspective: "1000px",
  transform: completed ? "rotateX(180deg)" : "none",
});
