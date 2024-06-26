import React, { useState, useEffect, useRef } from "react";
//@ts-ignore
import Alarm03 from "../../assets/audio/Alarm03.wav";
import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import {
  StyledContainer,
  taskGroupBackFace,
  getSwipeAnimation,
  getItemContainerStyle,
  getMenuCounterStyle,
  whiteBoxStyle,
  StyledSubtitle,
  getWavesStyle,
} from "./TaskGroup.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";
import { TaskGroupProps } from "./TaskGroup.types.ts";
import AddButton from "../AddButton/AddButton.tsx";
import Waves from "../Waves/Waves.tsx";
import { LuLock } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdHelp, IoMdRefresh } from "react-icons/io";
import { IoPlanet } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";

const TaskGroup = React.forwardRef<HTMLDivElement, TaskGroupProps>(
  ({ role, variant, completed, ...props }, ref) => {
    const localStorageKey = `${role}_taskItems`;
    const [taskItems, setTaskItems] = useState(() => {
      const savedItems = localStorage.getItem(localStorageKey);
      if (savedItems) {
        return JSON.parse(savedItems);
      } else {
        return [{ id: 1, status: "active" }];
      }
    });
    const [elementCount, setElementCount] = useState(0);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [timePercent, setTimePercent] = useState(0);

    const ElementRef = useRef(null as any);
    const audioRef = useRef<HTMLAudioElement>(null);

    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    React.useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    useEffect(() => {
      const savedItems = localStorage.getItem(localStorageKey);
      if (savedItems) {
        const parsedItems = JSON.parse(savedItems);
        setTaskItems(parsedItems);
      }
    }, [localStorageKey]);

    useEffect(() => {
      setElementCount(ElementRef?.current?.childNodes.length - 1);
    }, [elementCount, taskItems]);

    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(taskItems));
      document.dispatchEvent(new Event("taskGroupCompletionStatusChanged"));
    }, [taskItems, localStorageKey]);

    const handleItemComplete = (itemId: any) => {
      const updatedItems = taskItems.map((item: { id: any }) => {
        if (item.id === itemId) {
          audioRef.current?.play();
          return { ...item, status: "finished" };
        }
        return item;
      });

      setTaskItems(updatedItems);
    };

    const handleAddItem = () => {
      if (taskItems.length > 9) {
        setOpenSnackbar(true);
      } else {
        const newItem = {
          id: taskItems.length + 2,
          status: "active",
        };
        setTaskItems([...taskItems, newItem]);
      }
    };

    const handleRemoveItem = () => {
      if (taskItems.length < 2) {
        setOpenSnackbar(true);
        return;
      }
      const updatedTaskItems = [...taskItems];
      updatedTaskItems.pop();
      setTaskItems(updatedTaskItems);
    };

    const getRoleText = () => {
      switch (role) {
        case "extraIncome":
          return "Renda Extra";
        case "networking":
          return isMobile ? "Net-Working" : "Networking";
        default:
          return isMobile ? "Requali-ficação" : "Requalificação";
      }
    };

    const selectTextCount = () => {
      if (role === "extraIncome") {
        return variant === "Hour" ? "5" : "10";
      } else if (role === "networking") {
        return variant === "Hour" ? "4" : "8";
      } else {
        return variant === "Hour" ? "3" : "6";
      }
    };

    // Otimizar essa const aq
    const selectTextColor = () => {
      if (
        variant === "Hour"
          ? (role === "extraIncome" && elementCount + 1 > 5) ||
            (role === "networking" && elementCount + 1 > 4) ||
            (role === "requalification" && elementCount + 1 > 3)
          : (role === "extraIncome" && elementCount + 1 > 10) ||
            (role === "networking" && elementCount + 1 > 8) ||
            (role === "requalification" && elementCount + 1 > 6)
      ) {
        return "#C62828";
      } else if (
        variant === "Hour"
          ? (role === "extraIncome" && elementCount + 1 < 5) ||
            (role === "networking" && elementCount + 1 < 4) ||
            (role === "requalification" && elementCount + 1 < 3)
          : (role === "extraIncome" && elementCount + 1 < 10) ||
            (role === "networking" && elementCount + 1 < 8) ||
            (role === "requalification" && elementCount + 1 < 6)
      ) {
        return "yellow";
      }
      return "white";
    };

    const renderItems = () => {
      return taskItems.map(
        (
          task: { id: React.Key | null | undefined; status: string },
          index: number
        ) => {
          const onLocked =
            index > 0 && taskItems[index - 1].status === "active";
          return (
            <TaskItem
              key={task.id}
              state={task.status}
              onLocked={onLocked}
              role={role}
              variant={variant}
              onComplete={() => handleItemComplete(task.id)}
            />
          );
        }
      );
    };

    useEffect(() => {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          const timeTotal = variant === "Hour" ? 3600 : 1800;

          if (
            mutation.type === "characterData" &&
            mutation.target.parentElement &&
            mutation.target.parentElement.classList.contains("time-counter") &&
            mutation.target.textContent
          ) {
            const [horas, minutos] = mutation.target.textContent
              .split(":")
              .map(Number);
            const timeInMinuts = horas * 60 + minutos;
            const timePercentage = (timeInMinuts * 40) / timeTotal;

            return setTimePercent(timePercentage);
          }
        });
      });

      const element = ElementRef.current;
      if (element) {
        const config = { characterData: true, subtree: true };
        observer.observe(element, config);

        return () => {
          observer.disconnect();
        };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box>
        {isMobile ? (
          <StyledContainer completed {...props}>
            <Box sx={whiteBoxStyle(completed, role)}>
              <Box>
                <Typography>{getRoleText()}</Typography>
                <StyledSubtitle completed={completed} />
              </Box>
            </Box>
            <Box sx={getSwipeAnimation(completed, role)}>
              <Box sx={getWavesStyle(timePercent)}>
                <Waves role={role} />
                <Waves role={role} />
                <Waves role={role} />
                <Waves role={role} />
              </Box>
              <Box sx={getItemContainerStyle()} ref={ElementRef}>
                {renderItems()}
              </Box>
              <Box sx={getMenuCounterStyle(selectTextColor)}>
                <IconButton onClick={handleRemoveItem}>
                  <AddButton minus />
                </IconButton>
                <Typography>{`${
                  elementCount + 1
                }/${selectTextCount()}`}</Typography>
                <IconButton onClick={handleAddItem}>
                  <AddButton />
                </IconButton>
              </Box>
              <Box sx={taskGroupBackFace(role)}>
                <LuLock className="svg-item" size={"32px"} />
                <FaMoneyBillWave className="svg-item" size={"32px"} />
                <IoMdHelp className="svg-item" size={"32px"} />
                <Typography>{`${getRoleText()} Concluido!`}</Typography>
                <IoMdRefresh className="svg-item" size={"32px"} />
                <IoPlanet className="svg-item" size={"32px"} />
                <BsCashCoin className="svg-item" size={"32px"} />
                <BsClockHistory className="svg-item" size={"32px"} />
              </Box>
            </Box>
          </StyledContainer>
        ) : (
          <StyledContainer completed {...props}>
            <Box className="style-artifact" />
            <Box sx={whiteBoxStyle(completed, role)}>
              <Box>
                <Typography>{getRoleText()}</Typography>
                <StyledSubtitle completed={completed} />
              </Box>
            </Box>
            <Box sx={getSwipeAnimation(completed, role)}>
              <Box sx={getWavesStyle(timePercent)}>
                <Waves role={role} />
                <Waves role={role} />
                <Waves role={role} />
                <Waves role={role} />
              </Box>
              <Box sx={getItemContainerStyle()} ref={ElementRef}>
                {renderItems()}
              </Box>
              <Box sx={getMenuCounterStyle(selectTextColor)}>
                <IconButton onClick={handleRemoveItem}>
                  <AddButton minus />
                </IconButton>
                <Typography>{`${
                  elementCount + 1
                }/${selectTextCount()}`}</Typography>
                <IconButton onClick={handleAddItem}>
                  <AddButton />
                </IconButton>
              </Box>
              <Box sx={taskGroupBackFace(role)}>
                <LuLock className="svg-item" size={"32px"} />
                <FaMoneyBillWave className="svg-item" size={"32px"} />
                <IoMdHelp className="svg-item" size={"32px"} />
                <Typography>{`${getRoleText()} Concluido!`}</Typography>
                <IoMdRefresh className="svg-item" size={"32px"} />
                <IoPlanet className="svg-item" size={"32px"} />
                <BsCashCoin className="svg-item" size={"32px"} />
                <BsClockHistory className="svg-item" size={"32px"} />
              </Box>
            </Box>
          </StyledContainer>
        )}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          message="Limite Maximo ou Minimo de itens atingido"
          onClose={() => setOpenSnackbar(false)}
        />
        <audio src={Alarm03} ref={audioRef} />
      </Box>
    );
  }
);

export default TaskGroup;
