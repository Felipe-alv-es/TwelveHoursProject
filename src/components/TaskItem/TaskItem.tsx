import React, { useState, useEffect, useRef } from "react";
import { TaskItemProps } from "./TaskItem.types.ts";
import { Box, IconButton, Typography } from "@mui/material";
import { LuLock } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineThumbUp, MdLaptopChromebook } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ role, onLocked, state, variant, onComplete, ...props }, ref) => {
    const [seconds, setSeconds] = useState(
      variant === "Hour" ? 2 : variant === "HalfHour" ? 1800 : 3600
    );
    const [timerStarted, setTimerStarted] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
      if (seconds === 0 && state !== "finished") {
        onComplete();
      }
    }, [seconds, state, onComplete]);

    useEffect(() => {
      localStorage.setItem("seconds", JSON.stringify(seconds));
    }, [seconds]);

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
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          marginRight: "1%",
        }}
        {...props}
      >
        {state === "active" && !onLocked && (
          <Typography
            className="time-counter"
            sx={{
              fontWeight: "400",
              fontFamily: "Kanit",
              textAlign: "center",
              color: "#FFFFF7",
              fontSize: "16px",
            }}
          >{`${formatTime(seconds)}`}</Typography>
        )}

        <IconButton
          onClick={() => {
            handleClick();
          }}
          sx={{
            color: "#FFFFF7",
            height: "fit-content",
            transition: "1s",
            transform: "translateY(-3%)",
            pointerEvents: state === "finished" || onLocked ? "none" : "",
            ":hover": {
              transform: !timerStarted ? "scale(1.1)" : "",
            },
            animation:
              timerStarted && seconds && seconds > 0 && timerStarted
                ? "floater 1.5s infinite"
                : "",
            "> svg": {
              height: state === "active" && !onLocked ? "64px" : "40px",
              width: state === "active" && !onLocked ? "64px" : "40px",
            },
            "@keyframes floater": {
              "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
              "50%": { transform: "translateY(3%);transition: ease 0.5s" },
            },
          }}
        >
          {getContent()}
        </IconButton>
      </Box>
    );
  }
);

export default TaskItem;
