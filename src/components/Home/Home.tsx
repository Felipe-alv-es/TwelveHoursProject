import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Verifica se algum TaskItem mudou para "finished"
    const hasFinished = taskItems.some((item) => item.status === "finished");

    if (hasFinished) {
      // Atualiza os itens subsequentes para "active"
      const updatedItems = taskItems.map((item, index) => {
        if (index > taskItems.findIndex((item) => item.status === "finished")) {
          return { ...item, status: "active" };
        }
        return item;
      });
      setTaskItems(updatedItems);
    }
  }, [taskItems]);

  const renderItems = () => {
    let previousItemStatus = "inactive"; // Estado inicial do item anterior
    return taskItems.map((task, index) => {
      const onLocked = previousItemStatus === "active";
      previousItemStatus = task.status; // Atualiza o estado do item anterior
      return <TaskItem key={task.id} state={task.status} onLocked={onLocked} />;
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
