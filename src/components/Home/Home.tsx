import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTypography,
  StyledContainer,
  getTitleStyle,
  getSubtitleStyle,
} from "./Home.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";

const Home = () => {
  const [taskItems, setTaskItems] = useState([
    { id: 1, status: "active" },
    { id: 2, status: "active" },
    { id: 3, status: "active" },
    { id: 4, status: "active" },
    { id: 5, status: "active" },
  ]);

  const handleItemComplete = (itemId) => {
    const updatedItems = taskItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: "finished" };
      }
      return item;
    });
    setTaskItems(updatedItems);
  };

  const renderItems = () => {
    return taskItems.map((task, index) => {
      const onLocked = index > 0 && taskItems[index - 1].status === "active";
      return (
        <TaskItem
          key={task.id}
          state={task.status}
          onLocked={onLocked}
          onComplete={() => handleItemComplete(task.id)}
        />
      );
    });
  };

  return (
    <Box>
      <Typography sx={getTitleStyle()}>Técnica das 12 Horas</Typography>
      <Typography sx={getSubtitleStyle()}>
        {"Se organize | Faça conexões | Desenvolva seu profissional"}
      </Typography>
      <StyledContainer>
        <Box>
          <StyledTypography>Renda Extra</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>{renderItems()}</Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Networking</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          {/* <TaskItem role="networking" />
          <TaskItem onLocked />
          <TaskItem />
          <TaskItem /> */}
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Requalificação</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          {/* <TaskItem role="requalification" />
          <TaskItem />
          <TaskItem /> */}
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Home;
