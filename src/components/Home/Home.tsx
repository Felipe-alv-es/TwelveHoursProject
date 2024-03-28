import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Modal, Button } from "@mui/material";
import {
  getTitleStyle,
  getSubtitleStyle,
  getButtonIconStyle,
  getModalStyle,
  getChangeButtonStyle,
} from "./Home.styles.ts";
import { TaskGroupProps } from "../TaskGroup/TaskGroup.types.ts";
import TaskGroup from "../TaskGroup/TaskGroup.tsx";
import { TbHelpCircle } from "react-icons/tb";
import { pagesContent } from "../../assets/utils/helpContent.ts";
import { FaExchangeAlt } from "react-icons/fa";

const Home = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [clicked, setClicked] = useState(
    () => localStorage.getItem("clicked") || "Hour"
  );

  useEffect(() => {
    localStorage.setItem("clicked", clicked);
  }, [clicked]);

  const handleClick = () => {
    setClicked(clicked === "Hour" ? "HalfHour" : "Hour");
    window.location.reload();
  };

  return (
    <Box>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <IconButton sx={getChangeButtonStyle()} onClick={handleClick}>
          <FaExchangeAlt />
        </IconButton>
        <Typography sx={getTitleStyle()}>Técnica das 12 Horas</Typography>
        <IconButton sx={getButtonIconStyle()} onClick={handleOpen}>
          <TbHelpCircle />
        </IconButton>
      </Box>
      <Typography sx={getSubtitleStyle()}>
        {"Se organize | Faça conexões | Desenvolva seu profissional"}
      </Typography>
      <TaskGroup
        role="extraIncome"
        variant={clicked as TaskGroupProps["variant"]}
      />
      <TaskGroup
        role="networking"
        variant={clicked as TaskGroupProps["variant"]}
      />
      <TaskGroup
        role="requalification"
        variant={clicked as TaskGroupProps["variant"]}
      />
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={getModalStyle()}>
          <Box>
            <Typography>Tecnica das 12 horas</Typography>
          </Box>
          <Box>
            <Typography className="title">{pagesContent[0].title}</Typography>
            <Typography>{pagesContent[0].text1}</Typography>
            <Typography className="title">{pagesContent[0].title2}</Typography>
            <Typography>{pagesContent[0].text2}</Typography>
            <Typography className="title">{pagesContent[0].title3}</Typography>
            <Typography>{pagesContent[0].text3}</Typography>
            <Typography className="title">{pagesContent[0].title4}</Typography>
            <Typography>{pagesContent[0].text4}</Typography>
            <Typography className="title">{pagesContent[0].title5}</Typography>
            <Typography>{pagesContent[0].text5}</Typography>
            <Typography>{pagesContent[0].text6}</Typography>
          </Box>
          <Box>
            <Button onClick={handleClose}>Tela inicial</Button>
            <Button
              href="https://www.youtube.com/watch?v=nhHc5VkCO08&t=0s"
              target="_blank"
              variant="contained"
            >
              Aprenda mais
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
