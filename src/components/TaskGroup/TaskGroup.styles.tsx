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
        background: "linear-gradient(to right, #B34684, #B3A446)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        "> .style-artifact": {
          background: "#123357",
          width: "32%",
          height: "60%",
          position: "absolute",
          transform: "skew(20deg)",
          bottom: -1,
        },
        ".style-white-box": {
          background: "#FFFFF7",
          width: "35%",
          marginLeft: "-3%",
          transform: "skew(20deg)",
          display: "grid",
          placeItems: "center",
          padding: "2%",
          ">p": {
            fontWeight: "600",
            fontFamily: "Kanit",
            fontSize: "20px",
            transform: "skew(-20deg)",
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
      }}
      elevation={10}
      {...props}
    />
  );
};

export const getItemContainerStyle = (): SxProps => ({
  display: "flex",
  width: "65%",
  padding: " 2% 2% 2% 2%",
  justifyContent: "center",
});

export const getMenuCounterStyle = (textColor): SxProps => ({
  display: "flex",
  right: 20,
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
  animation: "changeColorLetters 10s linear infinite",
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
        animation: "changeColorLetters 2s linear infinite",
      },
      "@keyframes changeColorLetters": {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const animationDepot = {
  "@keyframes changeColorLetters": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
};
