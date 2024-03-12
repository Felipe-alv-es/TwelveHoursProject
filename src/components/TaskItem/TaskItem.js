import React, { useState } from "react";
import { Paper } from "@mui/material";
import { getPaperStyle } from "./TaskItem.styles.ts";
import { FcCheckmark } from "react-icons/fc";
import { PiClockCountdown } from "react-icons/pi";
import { PiPlayCircleFill } from "react-icons/pi";

const TaskItem = () => {
  const [seconds, setSeconds] = useState(10);

  const handleClick = () => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          console.log("Contagem regressiva concluída!");
          return prevSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  };

  const secondsPercent = seconds * 10;

  const getIcon = () => {
    if (seconds === 10) {
      return <PiPlayCircleFill size="48px" color="#474747" />;
    } else if (seconds > 0 && seconds !== 10) {
      return <PiClockCountdown size="48px" color="#38888F" />;
    }
    return <FcCheckmark size="48px" />;
  };

  console.log(seconds);
  return (
    <Paper sx={getPaperStyle(secondsPercent)} onClick={handleClick}>
      {getIcon()}
    </Paper>
  );
};

export default TaskItem;
