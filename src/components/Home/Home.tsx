import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Modal,
  Button,
  Tooltip,
} from "@mui/material";
import {
  getTitleStyle,
  getSubtitleStyle,
  getModalStyle,
  getButtonsContainerStyle,
} from "./Home.styles.ts";
import { TaskGroupProps } from "../TaskGroup/TaskGroup.types.ts";
import TaskGroup from "../TaskGroup/TaskGroup.tsx";
import { pagesContent } from "../../assets/utils/helpContent.ts";
import { FaExchangeAlt } from "react-icons/fa";
import { IoMdHelp, IoMdRefresh } from "react-icons/io";
import { BsFillSkipForwardFill } from "react-icons/bs";

const Home = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [clicked, setClicked] = useState(() => {
    const storedClicked = localStorage.getItem("clicked");
    return storedClicked !== null ? storedClicked : "Hour";
  });
  const [completeExtra, setCompleteExtra] = useState(false);
  const [completeNet, setCompleteNet] = useState(false);
  const [completeReq, setCompleteReq] = useState(false);

  useEffect(() => {
    localStorage.setItem("clicked", clicked);
  }, [clicked]);

  const handleClick = () => {
    setClicked(clicked === "Hour" ? "HalfHour" : "Hour");
    window.location.reload();
  };

  const handleSkip = () => {
    setClicked(clicked === "SkipTask" ? "Hour" : "SkipTask");
    window.location.reload();
  };

  const handleDataUpdateStatus = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const itemKey = localStorage.key(i);

      if (itemKey !== null) {
        if (itemKey !== "clicked") {
          const savedDataString = localStorage.getItem(itemKey);

          if (savedDataString) {
            try {
              const savedData = JSON.parse(savedDataString);

              if (Array.isArray(savedData)) {
                savedData.forEach((item: any) => {
                  if (item.hasOwnProperty("status")) {
                    item.status = "active";
                  }
                });

                localStorage.setItem(itemKey, JSON.stringify(savedData));
              }
            } catch (error) {
              console.error(
                `Erro ao processar os dados do localStorage para a chave "${itemKey}":`,
                error
              );
            }
          }
        }
      }
    }
    window.location.reload();
  };

  const areAllItemsCompleted = (taskItems) => {
    return taskItems.every((item) => item.status === "finished");
  };

  useEffect(() => {
    const updateStatus = () => {
      const extraIncome_taskItems = JSON.parse(
        localStorage.getItem("extraIncome_taskItems") || "[]"
      );
      const networking_taskItems = JSON.parse(
        localStorage.getItem("networking_taskItems") || "[]"
      );
      const requalification_taskItems = JSON.parse(
        localStorage.getItem("requalification_taskItems") || "[]"
      );

      const completeExtra = areAllItemsCompleted(extraIncome_taskItems);
      const completeNet = areAllItemsCompleted(networking_taskItems);
      const completeReq = areAllItemsCompleted(requalification_taskItems);

      if (
        completeExtra !== completeExtraState ||
        completeNet !== completeNetState ||
        completeReq !== completeReqState
      ) {
        setCompleteExtra(completeExtra);
        setCompleteNet(completeNet);
        setCompleteReq(completeReq);

        document.dispatchEvent(new Event("taskGroupCompletionStatusChanged"));
      }
    };

    const completeExtraState = completeExtra;
    const completeNetState = completeNet;
    const completeReqState = completeReq;

    updateStatus();
    document.addEventListener("taskGroupCompletionStatusChanged", updateStatus);

    return () => {
      document.removeEventListener(
        "taskGroupCompletionStatusChanged",
        updateStatus
      );
    };
  }, [completeExtra, completeNet, completeReq]);

  return (
    <Box>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Box sx={getButtonsContainerStyle()}>
          <Tooltip title="Pular tempo dos itens">
            <IconButton onClick={handleSkip}>
              <BsFillSkipForwardFill />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resetar Tempo">
            <IconButton onClick={handleDataUpdateStatus}>
              <IoMdRefresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mudar variante">
            <IconButton onClick={handleClick}>
              <FaExchangeAlt />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ajuda">
            <IconButton onClick={handleOpen}>
              <IoMdHelp />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography sx={getTitleStyle()}>Técnica das 12 Horas</Typography>
      </Box>
      <Typography sx={getSubtitleStyle()}>
        {"Se organize | Faça conexões | Desenvolva seu profissional"}
      </Typography>
      <TaskGroup
        role="extraIncome"
        variant={clicked as TaskGroupProps["variant"]}
        completed={completeExtra}
      />
      <TaskGroup
        role="networking"
        variant={clicked as TaskGroupProps["variant"]}
        completed={completeNet}
      />
      <TaskGroup
        role="requalification"
        variant={clicked as TaskGroupProps["variant"]}
        completed={completeReq}
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
