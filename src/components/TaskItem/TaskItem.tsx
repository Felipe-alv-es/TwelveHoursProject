import React, { useState } from "react";
import { getPaperStyle, getActiveIconStyle } from "./TaskItem.styles.ts";
import { TaskItemProps } from "./TaskItem.types.ts";
import { Box, Paper, Typography } from "@mui/material";
import { PiPlayCircleFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(
  ({ active, locked, finished, ...props }, ref) => {
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

    const getIcon = () => {
      if (locked) {
        return <RiLock2Fill size="32px" color="#828282" />;
      } else if (finished) {
        return <FaCheck color="#FFFFF7" size="32px" />;
      } else {
        return (
          <Box sx={getActiveIconStyle()}>
            <PiPlayCircleFill size="50px" />;
            <Box sx={{ display: "block" }}>
              <Typography className="first-title">
                Vamos ganhar um dinheiro extra!
              </Typography>
              <Typography className="second-title">
                Tempo restante: 00:30
              </Typography>
            </Box>
          </Box>
        );
      }
    };

    console.log(seconds);

    return (
      <Paper
        sx={getPaperStyle(active, locked)}
        onClick={handleClick}
        {...props}
      >
        {getIcon()}
      </Paper>
    );
  }
);

export default TaskItem;
