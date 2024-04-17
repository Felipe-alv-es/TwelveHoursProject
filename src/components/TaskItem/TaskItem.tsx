import React, { useState, useEffect, useRef } from "react";
import { TaskItemProps } from "./TaskItem.types.ts";
import { iconButtonStyle, getContainerStyle } from "./TaskItem.styles.ts";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { LuLock } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineThumbUp, MdLaptopChromebook } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ role, onLocked, state, variant, onComplete, ...props }, ref) => {
    const [seconds, setSeconds] = useState(
      variant === "Hour"
        ? 3600
        : variant === "HalfHour"
        ? 1800
        : variant === "SkipTask"
        ? 900
        : 3600
    );
    const [timerStarted, setTimerStarted] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
      if (seconds === 0 && state !== "finished") {
        onComplete();
      }
    }, [seconds, state, onComplete]);

    useEffect(() => {
      if (timerStarted && seconds !== 0) {
        document.title = `Tempo restante: ${formatTime(seconds)}`;
      } else {
        document.title = "Técnica das 12 Horas";
      }
      localStorage.setItem("seconds", JSON.stringify(seconds));
    }, [seconds, timerStarted]);

    const handleClick = () => {
      if (!onLocked && state !== "finished") {
        if (!timerStarted) {
          intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds > 0) {
                return prevSeconds - 1;
              } else {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }
                console.log("Contagem regressiva concluída!");
                setTimerStarted(false);
                return prevSeconds;
              }
            });
          }, 1000);
          setTimerStarted(true);
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setTimerStarted(false);
        }
      }
    };

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    };

    const getContent = () => {
      if (onLocked) {
        return <LuLock />;
      }
      switch (role) {
        case "requalification": {
          if (state === "finished") {
            return <PiStudent />;
          } else {
            return <MdLaptopChromebook />;
          }
        }
        case "extraIncome": {
          if (state === "finished") {
            return <BiMoneyWithdraw />;
          } else {
            return <FaRegMoneyBillAlt />;
          }
        }
        default: {
          if (state === "finished") {
            return <MdOutlineThumbUp />;
          } else {
            return <CiLinkedin />;
          }
        }
      }
    };

    return (
      <Box sx={getContainerStyle} {...props}>
        {state === "active" && !onLocked && (
          <Typography
            className="time-counter"
            sx={{
              opacity: 0,
            }}
          >{`${formatTime(seconds)}`}</Typography>
        )}
        <Tooltip placement="top" arrow title={formatTime(seconds)}>
          <IconButton
            onClick={() => {
              handleClick();
            }}
            sx={iconButtonStyle(state, onLocked, timerStarted, seconds)}
          >
            {getContent()}
          </IconButton>
        </Tooltip>
      </Box>
    );
  }
);

export default TaskItem;
