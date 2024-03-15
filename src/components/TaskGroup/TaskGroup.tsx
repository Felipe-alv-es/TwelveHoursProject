import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { StyledTypography, StyledContainer } from "./TaskGroup.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";
import { TaskGroupProps } from "./TaskGroup.types.ts";

const TaskGroup = React.forwardRef<HTMLDivElement, TaskGroupProps>(
  ({ role, quantity = 0 }, ref) => {
    const [taskItems, setTaskItems] = useState([{ id: 1, status: "active" }]);

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

    return (
      <Box>
        <StyledContainer>
          <Box>
            <StyledTypography>
              {role === "extraIncome"
                ? "Renda Extra"
                : role === "networking"
                ? "Networking"
                : "Requalificação"}
            </StyledTypography>
            <StyledTypography>
              {role === "extraIncome"
                ? "5/5"
                : role === "networking"
                ? "4/4"
                : "3/3"}
            </StyledTypography>
          </Box>
          <Box>
            {renderItems()}
            <Button variant="contained" onClick={() => handleAddItem()}>
              Clica em Mim
            </Button>
          </Box>
        </StyledContainer>
      </Box>
    );
  }
);

export default TaskGroup;
