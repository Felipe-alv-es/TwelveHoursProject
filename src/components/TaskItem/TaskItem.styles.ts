import { SxProps } from "@mui/material/";
import { TaskItemProps } from "./TaskItem.types.ts";

const getItemColor = (
  active?: TaskItemProps["active"],
  locked?: TaskItemProps["locked"]
) => {
  if (locked) {
    return "#D4D4D4";
  } else if (active) {
    return "linear-gradient(to right, #B34684, #B3A446)";
  }
  return "linear-gradient(to right, #228B22, #3CB371)";
};

export const getPaperStyle = (
  active?: TaskItemProps["active"],
  locked?: TaskItemProps["locked"]
): SxProps => ({
  height: active ? 96 : 64,
  width: active ? 192 : 64,
  minWidth: active ? 192 : 64,
  marginRight: "1%",
  display: "grid",
  placeItems: "center",
  alignSelf: "end",
  pointerEvents: locked ? "none" : "auto",
  background: getItemColor(active, locked),
  cursor: "pointer",
});

export const getActiveIconStyle = (): SxProps => ({
  display: "flex",
  padding: "2%",
  alignItems: "center",
  "> svg": {
    color: "#FFFFF7",
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
