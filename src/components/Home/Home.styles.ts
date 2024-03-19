import { SxProps } from "@mui/material";

export const getTitleStyle = (): SxProps => ({
  typography: "h2",
  textAlign: "center",
  paddingTop: "3%",
  fontWeight: "800",
  fontFamily: "Kanit",
});

export const getSubtitleStyle = (): SxProps => ({
  typography: "subtitle1",
  textAlign: "center",
  fontWeight: "600",
  fontFamily: "Kanit",
});
