import { SxProps } from "@mui/material/";

export const getPaperStyle = (secondsPercent): SxProps => ({
  height: 80,
  width: 80,
  minWidth: 80,
  marginRight: "1%",
  display: "grid",
  placeItems: "center",
  background:
    secondsPercent > 0
      ? `conic-gradient(#FFFFF7 ${secondsPercent}%, #B3B3AD ${secondsPercent}%)`
      : "#FFFFF7",
  cursor: "pointer",
});
