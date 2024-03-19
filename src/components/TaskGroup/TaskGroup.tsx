import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  StyledTypography,
  StyledContainer,
  StyledSubtitle,
} from "./TaskGroup.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";
import { TaskGroupProps } from "./TaskGroup.types.ts";
import AddButton from "../AddButton/AddButton.tsx";

const TaskGroup = React.forwardRef<HTMLDivElement, TaskGroupProps>(
  ({ role, quantity = 0 }, ref) => {
    const [taskItems, setTaskItems] = useState([{ id: 1, status: "active" }]);
    const [elementCount, setElementCount] = useState(0);

    const ElementRef = useRef(null as any);

    useEffect(() => {
      setElementCount(ElementRef?.current?.childNodes.length - 1);
    }, [elementCount, taskItems]);

    quantity = role === "extraIncome" ? 4 : role === "networking" ? 3 : 2;

    useEffect(() => {
      const newTaskItems = [...taskItems];
      for (let index = 0; index < quantity; index++) {
        newTaskItems.push({ id: index + index, status: "active" });
      }
      setTaskItems(newTaskItems);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const handleItemComplete = (itemId) => {
      const updatedItems = taskItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, status: "finished" };
        }
        return item;
      });
      setTaskItems(updatedItems);
    };

    const handleAddItem = () => {
      const newItem = {
        id: taskItems.length + 2,
        status: "active",
      };
      setTaskItems([...taskItems, newItem]);
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
      </Box>
    );
  }
);

export default TaskGroup;
