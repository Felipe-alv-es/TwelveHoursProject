import React from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTypography,
  StyledContainer,
  getTitleStyle,
} from "./Home.styles.tsx";
import TaskItem from "../TaskItem/TaskItem";

const Home = (props) => {
  return (
    <Box>
      <Typography sx={getTitleStyle}>Tecnica das 12 Horas</Typography>
      <StyledContainer>
        <Box>
          <StyledTypography>Renda Extra</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Networking</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Requalificação</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Home;
