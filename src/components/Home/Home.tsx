import React from "react";
import { Box, Typography } from "@mui/material";
import { getTitleStyle, getSubtitleStyle } from "./Home.styles.ts";
import TaskGroup from "../TaskGroup/TaskGroup.tsx";

const Home = () => {
  return (
    <Box>
      <Typography sx={getTitleStyle()}>Técnica das 12 Horas</Typography>
      <Typography sx={getSubtitleStyle()}>
        {"Se organize | Faça conexões | Desenvolva seu profissional"}
      </Typography>
      <TaskGroup role="extraIncome" />
      <TaskGroup role="networking" />
      <TaskGroup role="requalification" />
    </Box>
  );
};

export default Home;
