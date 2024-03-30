import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Snackbar } from "@mui/material";
import {
  StyledTypography,
  StyledContainer,
  StyledSubtitle,
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
      if (taskItems.length === 0) {
        return;
      }
      const updatedTaskItems = [...taskItems];
      updatedTaskItems.pop();
      setTaskItems(updatedTaskItems);
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

    return (
      <Box>
        <StyledContainer completed={completed} {...props}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <StyledTypography>
                {role === "extraIncome"
                  ? "Renda Extra"
                  : role === "networking"
                  ? "Networking"
                  : "Requalificação"}
              </StyledTypography>
              <StyledSubtitle>
                {role === "extraIncome"
                  ? "Explore novas oportunidades para aumentar sua renda"
                  : role === "networking"
                  ? "Construa conexões sólidas para impulsionar seu sucesso"
                  : "Investir em requalificação é o caminho para evoluir profissionalmente"}
              </StyledSubtitle>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  alignItems: "center",
                  height: "fit-content",
                }}
                onClick={() => handleRemoveItem()}
              >
                <AddButton minus />
              </IconButton>
              <StyledTypography
                sx={{
                  color: selectTextColor(),
                }}
              >
                {role === "extraIncome"
                  ? `${elementCount}/${variant === "Hour" ? 5 : 10}`
                  : role === "networking"
                  ? `${elementCount}/${variant === "Hour" ? 4 : 8}`
                  : `${elementCount}/${variant === "Hour" ? 3 : 6}`}
              </StyledTypography>
              <IconButton
                sx={{
                  alignItems: "center",
                  height: "fit-content",
                }}
                onClick={() => handleAddItem()}
              >
                <AddButton />
              </IconButton>
            </Box>
          </Box>
          <Box ref={ElementRef}>{renderItems()} </Box>
        </StyledContainer>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          message="Limite de Itens atingido"
          onClose={() => setOpenSnackbar(false)}
        />
        <audio src={Alarm03} ref={audioRef} />
      </Box>
    );
  }
);

export default TaskGroup;
