import { SxProps } from "@mui/material/";

export const getPaperStyle = (secondsPercent): SxProps => ({
  height: 80,
  width: 80,
  minWidth: 80,
  marginRight: "1%",
  display: "grid",
  placeItems: "center",
  background: `linear-gradient(to left, white ${secondsPercent}%, coral ${secondsPercent}%)`,
  cursor: "pointer",
});
