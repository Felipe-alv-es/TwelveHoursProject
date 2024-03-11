import React, { useState } from "react";
import { Paper } from "@mui/material";
import { getPaperStyle } from "./TaskItem.styles.ts";

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

  console.log(seconds);
  return (
    <Paper sx={getPaperStyle(secondsPercent)} onClick={handleClick}>
      {seconds > 0 ? 100 - secondsPercent : "Ok"}
    </Paper>
  );
};

export default TaskItem;
