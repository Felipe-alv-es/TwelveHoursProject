import React, { useState } from "react";
import { getPaperStyle, getActiveIconStyle } from "./TaskItem.styles.ts";
import { TaskItemProps } from "./TaskItem.types.ts";
import { Box, Paper, Typography } from "@mui/material";
import {
  PiPlayCircleFill,
  PiPauseCircleFill,
  PiStopCircleFill,
} from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ active, locked, finished, role, ...props }, ref) => {
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

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    };

    const getIcon = () => {
      if (seconds === 10) {
        return <PiPlayCircleFill />;
      } else if (seconds === 0) {
        return <PiStopCircleFill />;
      } else {
        return <PiPauseCircleFill />;
      }
    };

    const getContent = () => {
      if (locked) {
        return <RiLock2Fill size="32px" color="#828282" />;
      } else if (finished) {
        return <FaCheck color="#FFFFF7" size="32px" />;
      } else {
        switch (role) {
          case "extraIncome":
            return (
              <Box sx={getActiveIconStyle()}>
                {getIcon()}
                <Box>
                  <Typography className="first-title">
                    Vamos ganhar um dinheiro extra!
                  </Typography>
                  <Typography className="second-title">
                    {`Tempo restante: ${formatTime(seconds)}`}
                  </Typography>
                </Box>
              </Box>
            );
          case "networking":
            return (
              <Box sx={getActiveIconStyle()}>
                {getIcon()}
                <Box>
                  <Typography className="first-title">
                    Vamos expandir nossas redes!
                  </Typography>
                  <Typography className="second-title">
                    {`Tempo restante: ${formatTime(seconds)}`}
                  </Typography>
                </Box>
              </Box>
            );
          case "requalification":
            return (
              <Box sx={getActiveIconStyle()}>
                {getIcon()}
                <Box>
                  <Typography className="first-title">
                    Vamos nos aprimorar profissionalmente!
                  </Typography>
                  <Typography className="second-title">
                    {`Tempo restante: ${formatTime(seconds)}`}
                  </Typography>
                </Box>
              </Box>
            );
          default:
            return <Typography>{"Nenhuma ação programada =("}</Typography>;
        }
      }
    };

    console.log(seconds);

    return (
      <Paper
        sx={getPaperStyle(active, locked)}
        onClick={handleClick}
        {...props}
      >
        {getContent()}
      </Paper>
    );
  }
);

export default TaskItem;
