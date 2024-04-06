import { SxProps } from "@mui/material/";
import { TaskItemProps } from "./TaskItem.types.ts";

const getItemColor = (
  state?: TaskItemProps["state"],
  onLocked?: TaskItemProps["onLocked"]
) => {
  if (onLocked) {
    return "#D4D4D4";
  } else if (state === "active") {
    return "linear-gradient(to right, #B34684, #B3A446)";
  }
  return "linear-gradient(to right, #228B22, #3CB371)";
};

export const getPaperStyle = (
  seconds: TaskItemProps["seconds"],
  state?: TaskItemProps["state"],
  onLocked?: TaskItemProps["onLocked"],
  timerStarted?: boolean
): SxProps => ({
  height: state === "active" && !onLocked ? 96 : 64,
  width: state === "active" && !onLocked ? 192 : 64,
  minWidth: state === "active" && !onLocked ? 192 : 64,
  marginRight: "1%",
  display: "grid",
  placeItems: "center",
  alignSelf: "end",
  pointerEvents: onLocked || state === "finished" ? "none" : "auto",
  background: getItemColor(state, onLocked),
  cursor: "pointer",
  transform: "translateY(-3%)",
  animation:
    timerStarted && seconds && seconds > 0 && timerStarted
      ? "floater 1.5s infinite"
      : "",
  transition: "transform ease 0.5s",
  ":hover": {
    transform: timerStarted ? "" : "scale(1.05, 1.05)",
    transition: timerStarted ? "" : "ease 0.5s",
  },
  "@keyframes floater": {
    "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
    "50%": { transform: "translateY(3%);transition: ease 0.5s" },
  },
});

export const getActiveIconStyle = (): SxProps => ({
  display: "flex",
  padding: "2%",
  alignItems: "center",
  "> svg": {
    color: "#FFFFF7",
    height: "50px",
    width: "50px",
  },
  "> div > .first-title": {
    fontWeight: "400",
    fontFamily: "Kanit",
    textAlign: "center",
    color: "#FFFFF7",
    fontSize: "16px",
  },
  "> div > .second-title": {
    fontWeight: "400",
    fontFamily: "Kanit",
    textAlign: "center",
    color: "#FFFFF7",
    fontSize: "12px",
  },
});
