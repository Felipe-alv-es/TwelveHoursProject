import React from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTypography,
  StyledContainer,
  getTitleStyle,
  getSubtitleStyle,
} from "./Home.styles.tsx";
import TaskItem from "../TaskItem/TaskItem.tsx";

const Home = () => {
  return (
    <Box>
      <Typography sx={getTitleStyle}>Técnica das 12 Horas</Typography>
      <Typography sx={getSubtitleStyle}>
        {"Se organize | Faça conexões | Desenvolva seu profissional"}
      </Typography>
      <StyledContainer>
        <Box>
          <StyledTypography>Renda Extra</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem finished />
          <TaskItem active />
          <TaskItem locked />
          <TaskItem locked />
          <TaskItem locked />
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Networking</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem active />
          <TaskItem locked />
          <TaskItem locked />
          <TaskItem locked />
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Box>
          <StyledTypography>Requalificação</StyledTypography>
          <StyledTypography>5/5</StyledTypography>
        </Box>
        <Box>
          <TaskItem active />
          <TaskItem locked />
          <TaskItem locked />
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Home;
