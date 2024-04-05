import React from "react";
import { Paper } from "@mui/material";
import { TaskGroupProps } from "./TaskGroup.types";
import { SxProps } from "@mui/material/";

export const StyledContainer = (props) => {
  return (
    <Paper
      sx={{
        margin: "2% 10% 2% 10%",
        borderRadius: "32px",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        "> .style-artifact": {
          background: "#123357",
          width: "36%",
          height: "70%",
          position: "absolute",
          transform: "skew(20deg)",
          bottom: 0,
          zIndex: 1,
        },
      }}
      elevation={10}
      {...props}
    />
  );
};

export const whiteBoxStyle = (
  completed?: TaskGroupProps["completed"]
): SxProps => ({
  background: "#FFFFF7",
  width: completed ? "105%" : "35%",
  height: "100%",
  marginLeft: "-3%",
  transform: "skew(20deg)",
  display: "grid",
  placeItems: "center",
  zIndex: 1,
  position: "absolute",
  "> div": {
    transform: "skew(-20deg)",
    textAlign: "center",
    "> p": {
      fontWeight: "600",
      fontFamily: "Kanit",
      fontSize: "20px",
      background: "linear-gradient(to right, #B34684, #B3A446)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% auto",
      animation: "changeColorLetters 2s linear infinite",
    },
    "> p:first-of-type": {
      fontWeight: "800",
      fontSize: "28px",
      textTransform: "uppercase",
    },
  },
});

export const getItemContainerStyle = (): SxProps => ({
  display: "flex",
  width: "100%",
  padding: " 2% 2% 2% 2%",
  justifyContent: "center",
});

export const getMenuCounterStyle = (textColor): SxProps => ({
  display: "flex",
  right: 20,
  top: 10,
  position: "absolute",
  alignItems: "center",
  "> p": {
    fontWeight: "600",
    fontFamily: "Kanit",
    fontSize: "20px",
    color: textColor,
  },
});

export const taskGroupBackFace = (): SxProps => ({
  position: "absolute",
  width: "105%",
  height: "100%",
  marginLeft: "-5%",
  backfaceVisibility: "hidden",
  transform: "rotateX(180deg)",
  overflow: "hidden",
  zIndex: "-1",
  top: 0,
  background: "linear-gradient(to right, #B34684, #B3A446)",
  animation: "changeColorLetters 10s linear infinite",
  backgroundSize: "200% auto",
  "@keyframes changeColorLetters": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
});

export const getSwipeAnimation = (completed: TaskGroupProps["completed"]) => ({
  width: "105%",
  position: "relative",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  transform: completed ? "rotateX(180deg)" : "none",
  background: "linear-gradient(to right, #B34684, #B3A446)",
  marginLeft: "15%",
  // transition: "transform 2s",
  // perspective: "1000px",
});
