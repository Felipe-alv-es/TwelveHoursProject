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

export const getButtonIconStyle = (): SxProps => ({
  position: "absolute",
  right: "10%",
  borderWidth: "5px",
  borderStyle: "solid",
  borderColor: "#FFFFF7",
  "> svg": {
    height: "24px",
    width: "24px",
    color: "#FFFFF7",
  },
});

export const getChangeButtonStyle = (): SxProps => ({
  position: "absolute",
  left: "10%",
  borderWidth: "5px",
  borderStyle: "solid",
  borderColor: "#FFFFF7",
  "> svg": {
    height: "24px",
    width: "24px",
    color: "#FFFFF7",
  },
});

export const getModalStyle = (): SxProps => ({
  background: "white",
  margin: "5% 10% 5% 10%",
  borderRadius: "16px",
  padding: "2%",
  "> div:first-of-type": {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "16px",
    "> p": {
      typography: "h4",
      fontWeight: "600",
      fontFamily: "Kanit",
    },
  },
  "div:nth-of-type(2n)": {
    padding: "2% 10% 2% 10%",
    overflow: "scroll",
    height: "350px",
    marginBottom: "16px",
    "> .title": {
      typography: "h5",
      fontWeight: "600",
      fontFamily: "Kanit",
    },
    "> p": {
      typography: "body1",
      fontWeight: "300",
      fontFamily: "Kanit",
      whiteSpace: "pre-wrap",
    },
  },
  "div:nth-of-type(3n)": {
    display: "flex",
    justifyContent: "center",
    "> button": {
      color: "#383838",
    },
    "> a": {
      background: "#383838",
    },
  },
});
