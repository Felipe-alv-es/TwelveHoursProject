import React, { useState, useEffect } from "react";
import { getPaperStyle, getActiveIconStyle } from "./TaskItem.styles.ts";
import { TaskItemProps } from "./TaskItem.types.ts";
import { Box, Paper, Typography } from "@mui/material";
import { PiPlayCircleFill, PiPauseCircleFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ role, onLocked, onComplete, ...props }, ref) => {
    const [seconds, setSeconds] = useState(10);
    const [state, setState] = useState("active");
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(() => {
      if (seconds === 0 && state !== "finished") {
        setState("finished");
        onComplete();
      }
    }, [seconds, state, onComplete]);

    const handleClick = () => {
      if (!onLocked && state !== "finished" && !timerStarted) {
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
        setTimerStarted(true);
      }
    };

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    };

    const getIcon = () => {
      if (seconds < 10 && !onLocked && state !== "finished") {
        return <PiPauseCircleFill />;
      } else if (seconds === 10 && !onLocked && state !== "finished") {
        return <PiPlayCircleFill />;
      }
    };

    const getContent = () => {
      if (onLocked) {
        return <RiLock2Fill size="32px" color="#828282" />;
      } else if (state === "finished") {
        return <FaCheck color="#FFFFF7" size="32px" />;
      } else {
        switch (role) {
          case "extraIncome":
            return "Vamos ganhar um dinheiro extra!";
          case "networking":
            return " Vamos expandir nossas redes!";
          case "requalification":
            return " Vamos nos aprimorar profissionalmente!";
          default:
            return "Nenhuma ação programada =(";
        }
      }
    };

    return (
      <Paper
        sx={getPaperStyle(state, onLocked)}
        onClick={handleClick}
        {...props}
      >
        <Box sx={getActiveIconStyle()}>
          {getIcon()}
          <Box>
            <Typography className="first-title">{getContent()}</Typography>
            <Typography className="second-title">
              {onLocked
                ? ""
                : state === "finished"
                ? ""
                : `Tempo restante: ${formatTime(seconds)}`}
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  }
);

export default TaskItem;
