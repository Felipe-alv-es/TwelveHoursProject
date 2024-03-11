import React from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTypography,
  getContentStyle,
  getTitleStyle,
} from "./Home.styles.tsx";
import TaskItem from "../TaskItem/TaskItem";

const Home = () => {
  return (
    <Box>
      <Typography sx={getTitleStyle}>Tecnica das 12 Horas</Typography>
      <Box sx={getContentStyle}>
        <StyledTypography>Renda Extra</StyledTypography>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </Box>
      <Box sx={getContentStyle}>
        <StyledTypography>Networking</StyledTypography>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </Box>
      <Box sx={getContentStyle}>
        <StyledTypography>Requalificação</StyledTypography>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
