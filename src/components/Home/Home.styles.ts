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

export const getButtonsContainerStyle = (): SxProps => ({
  position: "absolute",
  right: "10%",
  "> button": {
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#FFFFF7",
    marginLeft: "4px",
    ":hover": {
      borderColor: "#D4D4CE",
      animation: "floater 1.5s infinite",
      transform: "translateY(-3%)",
      "@keyframes floater": {
        "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
        "50%": { transform: "translateY(3%);transition: ease 0.5s" },
      },
    },
    "> svg": {
      height: "24px",
      width: "24px",
      color: "#FFFFF7",
      ":hover": {
        color: "#D4D4CE",
      },
    },
  },
});

export const getModalStyle = (): SxProps => ({
  background: "white",
  margin: "5% 10% 5% 10%",
  borderRadius: "16px",
  padding: "2%",
  height: "80%",
  display: "block",
  overflow: "scroll",
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
    height: "80%",
    marginBottom: "16px",
    "@media(max-width: 1920px)": {
      height: "70%",
    },
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
