import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
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
            <Box
              sx={{
                height: "fit-content",
                alignSelf: "end",
                marginRight: "2%",
                "> button": {
                  "> svg": {
                    width: "50px",
                    height: "50px",
                  },
                },
              }}
            >
              <IconButton
                sx={{ alignItems: "center" }}
                onClick={() => handleAddItem()}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="200px"
                  width="200px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="myGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stop-color="#B34684" />
                      <stop offset="100%" stop-color="#B3A446" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" stroke="url(#myGradient)" />
                  <path d="M8 12h8" stroke="currenColor" />
                  <path d="M12 8v8" stroke="currenColor" />
                </svg>
                <Box
                  sx={{
                    width: "35px",
                    height: "35px",
                    display: "flex",
                    position: "absolute",
                  }}
                >
                  <svg
                    viewBox="0 0 448 512"
                    height="100%"
                    width="200px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="plusGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#B34684" />
                        <stop offset="100%" stopColor="#B3A446" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      stroke="currentColor"
                      fill="url(#plusGradient)"
                      strokeWidth="0"
                    />
                  </svg>
                </Box>
              </IconButton>
            </Box>
          </Box>
        </StyledContainer>
      </Box>
    );
  }
);

export default TaskGroup;
