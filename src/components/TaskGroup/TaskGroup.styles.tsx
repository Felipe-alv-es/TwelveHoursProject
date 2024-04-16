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
        "@media(max-width: 1350px)": {
          minHeight: "170px",
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
      setTitleTimer("150% 90%");
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
  completed?: TaskGroupProps["completed"],
  role?: TaskGroupProps["role"]
): SxProps => {
  const getFinishedDegrade = () => {
    const gradientStartColor = "#B34684";
    const gradientEndColor = "#E0EC3A";

    const gradientColor = tinycolor
      .mix(gradientStartColor, gradientEndColor, 50)
      .toHexString();

    return gradientColor;
  };

  const getRolesDegrade = () => {
    if (role === "requalification") {
      const gradientStartColor = "#414F7F";
      const gradientEndColor = "#455588";

      const gradientColor = tinycolor
        .mix(gradientStartColor, gradientEndColor, 50)
        .toHexString();

      return gradientColor;
    } else if (role === "networking") {
      const gradientStartColor = "#389771";
      const gradientEndColor = "#47C191";

      const gradientColor = tinycolor
        .mix(gradientStartColor, gradientEndColor, 50)
        .toHexString();

      return gradientColor;
    } else {
      const gradientStartColor = "#cd4f4e";
      const gradientEndColor = "#A23D3D";

      const gradientColor = tinycolor
        .mix(gradientStartColor, gradientEndColor, 50)
        .toHexString();

      return gradientColor;
    }
  };

  return {
    background: "#FFFFF7",
    animation: completed ? "changeWidth 5s ease-in-out" : "",
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
        backgroundImage: `linear-gradient(30deg, ${getFinishedDegrade()} 70%, ${getRolesDegrade()} 70%)`,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        fontFamily: "Kanit",
        transition: "1s",
        backgroundSize: "100% 1100%",
      },
      "> p:nth-of-type(2n)": {
        fontSize: "20px",
        fontWeight: "600",
        WebkitBackgroundSize: completed ? useSubtitleTimer : "",
        animation: completed ? "popEffect 0.3s 1.8s ease-in-out" : "",
        "@keyframes popEffect": {
          "0%": { transform: "scale(1.00)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.00)" },
        },
        "@media(max-width: 1350px)": {
          fontSize: "14px",
        },
      },
      "> p:first-of-type": {
        fontWeight: "800",
        fontSize: "28px",
        textTransform: "uppercase",
        WebkitBackgroundSize: completed ? useTitleTimer : "",
        animation: completed ? "popEffect 0.3s 2.8s ease-in-out" : "",
        "@media(max-width: 1350px)": {
          fontSize: "18px",
        },
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
    "@media(max-width: 1350px)": {
      marginLeft: "-10%",
      paddingLeft: "10%",
      width: "45%",
    },
  };
};

export const getItemContainerStyle = (): SxProps => ({
  display: "flex",
  width: "100%",
  height: "100%",
  marginLeft: "15%",
  alignItems: "end",
  padding: "1%",
  "@media(max-width: 1920px)": {
    marginLeft: "25%",
  },
  "@media(max-width: 1350px)": {
    marginLeft: "25%",
    width: "80%",
    minWidth: "80%",
    overflow: "scroll",
  },
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
  "@media(max-width: 1350px)": {
    left: 100,
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
    "@media(max-width: 1350px)": {
      fontSize: "14px",
    },
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

export const getSwipeAnimation = (
  completed: TaskGroupProps["completed"],
  role: TaskGroupProps["role"]
) => ({
  width: "105%",
  position: "relative",
  transformStyle: "preserve-3d",
  backfaceVisibility: "hidden",
  transform: completed ? "rotateX(180deg)" : "none",
  background:
    role === "requalification"
      ? "linear-gradient(to right, #758FE5, #455588)"
      : role === "networking"
      ? "linear-gradient(to right, #389771, #47C191)"
      : "linear-gradient(to right, #cd4f4e, #A23D3D)",
  animation: "changeColorLetters 10s linear infinite",
  backgroundSize: "200% auto",
  marginLeft: "15%",
  transition: "1s 2s",
});

export const getWavesStyle = (timePercent: number) => ({
  position: "absolute",
  bottom: 0,
  left: "10%",
  display: "flex",
  transition: "2s",
  translate: `-2% ${timePercent === 0 ? 45 : timePercent}%`,
  transform: "translateX(-0%)",
  animation: "move-horizontal 10s linear infinite",
  "> svg:nth-of-type(2n)": {
    transform: "rotateY(180deg)",
  },
  "@keyframes move-horizontal": {
    "0%": {
      transform: "translateX(-2%%)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
});

export const StyledSubtitle = (props) => {
  const { completed, ...rest } = props;

  const [subtitleText, setSubtitleText] = useState("Incompleto");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSubtitleText("Completo");
    }, 1800);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Typography {...rest}>{completed ? subtitleText : "Incompleto"}</Typography>
  );
};
