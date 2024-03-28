import React, { useState, useEffect, useRef } from "react";
import {
  getPaperStyle,
  getActiveIconStyle,
  getModalStyle,
} from "./TaskItem.styles.ts";
import { TaskItemProps } from "./TaskItem.types.ts";
import { Box, Paper, Typography, Modal, IconButton } from "@mui/material";
import { PiPlayCircleFill, PiPauseCircleFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ role, onLocked, state, onComplete, ...props }, ref) => {
    const [seconds, setSeconds] = useState(10);
    const [timerStarted, setTimerStarted] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    useEffect(() => {
      if (seconds === 0 && state !== "finished") {
        handleOpen();
        onComplete();
      }
    }, [seconds, state, onComplete]);

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

    const getIcon = () => {
      if (!onLocked && state !== "finished") {
        return timerStarted ? <PiPauseCircleFill /> : <PiPlayCircleFill />;
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
        sx={getPaperStyle(seconds, state, onLocked, timerStarted)}
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
        <Modal open={modalOpen} onClose={handleClose} sx={getModalStyle()}>
          <Box>
            <Box>
              <Typography>Tempo de tarefa finalizado</Typography>
            </Box>
            <Box>
              <FcAlarmClock />
            </Box>
            <Box>
              <IconButton onClick={handleClose}>
                <IoClose />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </Paper>
    );
  }
);

export default TaskItem;
