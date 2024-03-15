import { SxProps } from "@mui/material";

export const getTitleStyle = (): SxProps => ({
  typography: "h3",
  textAlign: "center",
  paddingTop: "3%",
  fontWeight: "600",
  fontFamily: "Kanit",
});

export const getSubtitleStyle = (): SxProps => ({
  typography: "subtitle1",
  textAlign: "center",
  fontWeight: "400",
  fontFamily: "Kanit",
});
