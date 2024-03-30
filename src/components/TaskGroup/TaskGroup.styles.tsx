import React from "react";
import { Typography, Paper } from "@mui/material";
import { TaskGroupProps } from "./TaskGroup.types";
import { SxProps } from "@mui/material/";

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
      fontWeight="600"
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

export const taskGroupBackFace = (): SxProps => ({
  position: "absolute",
  width: "80%",
  height: "100%",
  margin: "0% 10% 0% 10%",
  borderRadius: "32px",
  backfaceVisibility: "visible",
  transform: "rotateX(180deg)",
  overflow: "hidden",
  zIndex: "-1",
  top: 0,
  background: "linear-gradient(to right, #B34684, #B3A446)",
  animation: "floaterLetters 10s linear infinite",
  backgroundSize: "200% auto",
  "> div:first-of-type": {
    background: "#123357",
    width: "32%",
    height: "80%",
    position: "absolute",
    transform: "skew(20deg)",
    bottom: -1,
  },
  "div:nth-of-type(2n)": {
    background: "#FFFFF7",
    width: "30%",
    height: "100%",
    marginLeft: "-2.5%",
    transform: "skew(20deg)",
    display: "grid",
    placeItems: "center",
    gap: "0%",
    "> div": {
      height: "100%",
      width: "100%",
      transform: "skew(-20deg)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "> p:first-of-type": {
        fontWeight: "800",
        fontFamily: "Kanit",
        fontSize: "28px",
        textTransform: "uppercase",
      },
      ">p": {
        fontWeight: "600",
        fontFamily: "Kanit",
        background: "linear-gradient(to right, #B34684, #B3A446)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "20px",
        backgroundSize: "200% auto",
        animation: "floaterLetters 2s linear infinite",
      },
      "@keyframes floaterLetters": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },
});

export const getSwipeAnimation = (completed: TaskGroupProps["completed"]) => ({
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 2s",
  backfaceVisibility: "hidden",
  perspective: "1000px",
  transform: completed ? "rotateX(180deg)" : "none",
});
