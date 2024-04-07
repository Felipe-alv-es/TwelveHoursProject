// import { TaskItemProps } from "./TaskItem.types.ts";

// export const getPaperStyle = (
//   seconds: TaskItemProps["seconds"],
//   state?: TaskItemProps["state"],
//   onLocked?: TaskItemProps["onLocked"],
//   timerStarted?: boolean
// ): SxProps => ({
//   height: state === "active" && !onLocked ? 96 : 64,
//   width: state === "active" && !onLocked ? 192 : 64,
//   minWidth: state === "active" && !onLocked ? 192 : 64,
//   marginRight: "1%",
//   display: "grid",
//   placeItems: "center",
//   alignSelf: "end",
//   pointerEvents: onLocked || state === "finished" ? "none" : "auto",
//   background: getItemColor(state, onLocked),
//   cursor: "pointer",
//   transform: "translateY(-3%)",
//   animation:
//     timerStarted && seconds && seconds > 0 && timerStarted
//       ? "floater 1.5s infinite"
//       : "",
//   transition: "transform ease 0.5s",
//   ":hover": {
//     transform: timerStarted ? "" : "scale(1.05, 1.05)",
//     transition: timerStarted ? "" : "ease 0.5s",
//   },
//   "@keyframes floater": {
//     "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
//     "50%": { transform: "translateY(3%);transition: ease 0.5s" },
//   },
// });
