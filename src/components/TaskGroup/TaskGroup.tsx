import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import {
  StyledContainer,
  taskGroupBackFace,
  getSwipeAnimation,
  getItemContainerStyle,
  getMenuCounterStyle,
  whiteBoxStyle,
} from "./TaskGroup.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";
import { TaskGroupProps } from "./TaskGroup.types.ts";
import AddButton from "../AddButton/AddButton.tsx";
// @ts-ignore
import Alarm03 from "../../assets/audio/Alarm03.wav";

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

    const ElementRef = useRef(null as any);
    const audioRef = useRef<HTMLAudioElement>(null);

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
          return "Networking";
        default:
          return "Requalification";
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
          ? (role === "extraIncome" && elementCount > 5) ||
            (role === "networking" && elementCount > 4) ||
            (role === "requalification" && elementCount > 3)
          : (role === "extraIncome" && elementCount > 10) ||
            (role === "networking" && elementCount > 8) ||
            (role === "requalification" && elementCount > 6)
      ) {
        return "#C62828";
      } else if (
        variant === "Hour"
          ? (role === "extraIncome" && elementCount < 5) ||
            (role === "networking" && elementCount < 4) ||
            (role === "requalification" && elementCount < 3)
          : (role === "extraIncome" && elementCount < 10) ||
            (role === "networking" && elementCount < 8) ||
            (role === "requalification" && elementCount < 6)
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

    return (
      <Box>
        <StyledContainer {...props}>
          <Box className="style-artifact" />
          <Box sx={whiteBoxStyle(completed)}>
            <Box>
              <Typography>{getRoleText()}</Typography>
              <Typography>Em Progresso</Typography>
            </Box>
          </Box>
          <Box sx={getSwipeAnimation(completed)}>
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
            <Box sx={taskGroupBackFace()}></Box>
          </Box>
        </StyledContainer>

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
