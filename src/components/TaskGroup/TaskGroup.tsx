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
import Alarm03 from "../../assets/audio/Alarm03.wav";

const TaskGroup = React.forwardRef<HTMLDivElement, TaskGroupProps>(
  ({ role, quantity = 0 }, ref) => {
    const localStorageKey = `${role}_taskItems`; // Chave única para o localStorage
    const [taskItems, setTaskItems] = useState(() => {
      const savedItems = localStorage.getItem(localStorageKey);
      return savedItems
        ? JSON.parse(savedItems)
        : [{ id: 1, status: "active" }];
    });
    const [elementCount, setElementCount] = useState(0);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const ElementRef = useRef(null as any);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
      setElementCount(ElementRef?.current?.childNodes.length - 1);
    }, [elementCount, taskItems]);

    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(taskItems));
    }, [taskItems, localStorageKey]);

    const handleItemComplete = (itemId) => {
      const updatedItems = taskItems.map((item) => {
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
      return taskItems.map((task, index) => {
        const onLocked = index > 0 && taskItems[index - 1].status === "active";
        return (
          <TaskItem
            key={task.id}
            state={task.status}
            onLocked={onLocked}
            role={role}
            onComplete={() => handleItemComplete(task.id)}
          />
        );
      });
    };

    const selectTextColor = () => {
      if (
        (role === "extraIncome" && elementCount > 5) ||
        (role === "networking" && elementCount > 4) ||
        (role === "requalification" && elementCount > 3)
      ) {
        return "#C62828";
      } else if (
        (role === "extraIncome" && elementCount < 5) ||
        (role === "networking" && elementCount < 4) ||
        (role === "requalification" && elementCount < 3)
      ) {
        return "yellow";
      }
      return "white";
    };

    return (
      <Box>
        <StyledContainer>
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
                  ? `${elementCount}/5`
                  : role === "networking"
                  ? `${elementCount}/4`
                  : `${elementCount}/3`}
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
