import { SxProps } from "@mui/material";
import { TaskItemProps } from "./TaskItem.types";

export const getContainerStyle = () => ({
  display: "grid",
  placeItems: "center",
  marginRight: "1%",
});

export const iconButtonStyle = (
  state: TaskItemProps["state"],
  onLocked: TaskItemProps["onLocked"],
  timerStarted,
  seconds
): SxProps => ({
  color: "#FFFFF7",
  height: "fit-content",
  transition: "1s",
  transform: "translateY(-3%)",
  pointerEvents: state === "finished" || onLocked ? "none" : "",
  ":hover": {
    transform: !timerStarted ? "scale(1.1)" : "",
  },
  animation:
    timerStarted && seconds && seconds > 0 && timerStarted
      ? "floater 1.5s infinite"
      : "",
  "> svg": {
    height: state === "active" && !onLocked ? "64px" : "40px",
    width: state === "active" && !onLocked ? "64px" : "40px",
  },
  "@keyframes floater": {
    "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
    "50%": { transform: "translateY(3%);transition: ease 0.5s" },
  },
  "@media(max-width: 1350px)": {
    pointerEvents: "auto",
  },
});
