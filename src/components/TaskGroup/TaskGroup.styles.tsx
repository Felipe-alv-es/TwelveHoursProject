import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import { TaskGroupProps } from "./TaskGroup.types";
import { SxProps } from "@mui/material/";
import tinycolor from "tinycolor2";

export const StyledContainer = (props) => {
  const { completed, ...rest } = props;
  return (
    <Paper
      sx={{
        margin: "2% 10% 2% 10%",
        minHeight: completed ? "133px" : "",
        borderRadius: "32px",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        "> .style-artifact": {
          background: "#123357",
          width: "25%",
          height: "70%",
          position: "absolute",
          transform: "skew(20deg)",
          bottom: 0,
          zIndex: 1,
          "@media(max-width: 1920px)": {
            width: "36%",
          },
        },
      }}
      elevation={10}
      {...rest}
    />
  );
};

const useTitleTimer = () => {
  const [titleTimer, setTitleTimer] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTitleTimer("100% 90%");
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return titleTimer;
};

const useSubtitleTimer = () => {
  const [subtitleTimer, setSubtitleTimer] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSubtitleTimer("100% 90%");
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return subtitleTimer;
};

export const whiteBoxStyle = (
  completed?: TaskGroupProps["completed"]
): SxProps => {
  const gradientStartColor = "#B34684";
  const gradientEndColor = "#B3A446";

  const gradientColor = tinycolor
    .mix(gradientStartColor, gradientEndColor, 50)
    .toHexString();

  return {
    background: "#FFFFF7",
    animation: completed ? "changeWidth 6s ease-in-out" : "",
    width: "25%",
    transition: "3s",
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
      position: "relative",
      "> p": {
        backgroundImage: `linear-gradient(0deg, ${gradientColor} 70%, lightGreen 70%)`,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        fontFamily: "Kanit",
        transition: "2s",
        backgroundSize: "100% 290%",
      },
      "> p:nth-of-type(2n)": {
        fontSize: "20px",
        fontWeight: "600",
        WebkitBackgroundSize: completed ? useSubtitleTimer : "",
        animation: completed ? "popEffect 0.5s 2.4s ease-in-out" : "",
        "@keyframes popEffect": {
          "0%": { transform: "scale(1.00)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.00)" },
        },
      },
      "> p:first-of-type": {
        fontWeight: "800",
        fontSize: "28px",
        textTransform: "uppercase",
        WebkitBackgroundSize: completed ? useTitleTimer : "",
        animation: completed ? "popEffect 0.5s 3.4s ease-in-out" : "",
      },
    },
    "@keyframes changeWidth": {
      "0%": { width: "25%" },
      "25%": { width: "110%" },
      "50%": { width: "110%" },
      "75%": { width: "110%" },
      "100%": { width: "25%" },
    },
    "@media(max-width: 1920px)": {
      width: "35%",
      "@keyframes changeWidth": {
        "0%": { width: "35%" },
        "25%": { width: "110%" },
        "50%": { width: "110%" },
        "75%": { width: "110%" },
        "100%": { width: "35%" },
      },
    },
  };
};

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

export const taskGroupBackFace = (role): SxProps => ({
  position: "absolute",
  width: "105%",
  height: "100%",
  marginLeft: "-5%",
  backfaceVisibility: "hidden",
  transform: "rotateX(180deg)",
  overflow: "hidden",
  paddingLeft: "25%",
  top: 0,
  background: "linear-gradient(to right, #B34684, #B3A446)",
  animation: "changeColorLetters 10s linear infinite",
  backgroundSize: "200% auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transitionDuration: "animation 10s ease-in-out",
  "> p": {
    fontFamily: "Kanit",
    background: "linear-gradient(to right, #FFFFF7, #BDBDB7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% auto",
    animation: "changeColorLetters 2s linear infinite",
    fontWeight: "800",
    fontSize: "24px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  "> svg": {
    color: "white",
    ":first-of-type": {
      animation: `${
        role === "extraIncome" ? "moveRandom1" : "moveRandom2"
      } 15s linear infinite`,
    },
    ":nth-of-type(2n)": {
      animation: `${
        role === "networking" ? "moveRandom3" : "moveRandom4"
      } 15s linear infinite`,
      transform: "rotate(-10deg) translate(-200px) rotate(360deg)",
    },
    ":nth-of-type(3n)": {
      animation: `${
        role === "requalification" ? "moveRandom1" : "moveRandom4"
      } 15s linear infinite`,
      transform: "rotate(-10deg) translate(-200px) rotate(360deg)",
    },
    animation: `${
      role === "extraIncome" ? "moveRandom2" : "moveRandom3"
    } 15s linear infinite`,
    transform: "rotate(-10deg) translate(-200px) rotate(360deg)",
  },
  "@keyframes changeColorLetters": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
  "@keyframes moveRandom1": {
    "0%": { transform: "rotate(-10deg) translate(400px) rotate(360deg)" },
    "25%": { transform: "rotate(40deg) translate(-400px) rotate(-20deg)" },
    "50%": { transform: "rotate(20deg) translate(-600px) rotate(20deg)" },
    "75%": { transform: "rotate(0deg) translate(800px) rotate(360deg)" },
    "100%": { transform: "rotate(-10deg) translate(600px) rotate(360deg)" },
  },
  "@keyframes moveRandom2": {
    "0%": { transform: "rotate(20deg) translate(200px) rotate(180deg)" },
    "25%": { transform: "rotate(-20deg) translate(-400px) rotate(10deg)" },
    "50%": { transform: "rotate(30deg) translate(600px) rotate(-30deg)" },
    "75%": { transform: "rotate(0deg) translate(800px) rotate(360deg)" },
    "100%": { transform: "rotate(20deg) translate(600px) rotate(180deg)" },
  },
  "@keyframes moveRandom3": {
    "0%": { transform: "rotate(-20deg) translate(200px) rotate(270deg)" },
    "25%": { transform: "rotate(-30deg) translate(-400px) rotate(360deg)" },
    "50%": { transform: "rotate(40deg) translate(600px) rotate(-40deg)" },
    "75%": { transform: "rotate(10deg) translate(800px) rotate(270deg)" },
    "100%": { transform: "rotate(-20deg) translate(600px) rotate(270deg)" },
  },
  "@keyframes moveRandom4": {
    "0%": { transform: "rotate(-30deg) translate(-400px) rotate(90deg)" },
    "25%": { transform: "rotate(-10deg) translate(-400px) rotate(30deg)" },
    "50%": { transform: "rotate(20deg) translate(-600px) rotate(-20deg)" },
    "75%": { transform: "rotate(5deg) translate(800px) rotate(360deg)" },
    "100%": { transform: "rotate(-30deg) translate(600px) rotate(90deg)" },
  },
});

export const getSwipeAnimation = (completed: TaskGroupProps["completed"]) => ({
  width: "105%",
  position: "relative",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  transform: completed ? "rotateX(180deg)" : "none",
  background: "linear-gradient(to right, #B34684, #B3A446)",
  animation: "changeColorLetters 10s linear infinite",
  backgroundSize: "200% auto",
  marginLeft: "15%",
  transition: "1s 2s",
});

export const StyledSubtitle = (props) => {
  const { completed, ...rest } = props;

  const [subtitleText, setSubtitleText] = useState("Em Progresso");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSubtitleText("Completo");
    }, 2450);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Typography {...rest}>
      {completed ? subtitleText : "Em Progresso"}
    </Typography>
  );
};
