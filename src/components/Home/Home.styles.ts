import { SxProps } from "@mui/material";

export const getTitleStyle = (): SxProps => ({
  fontSize: "60px",
  textAlign: "center",
  paddingTop: "3%",
  fontWeight: "800",
  fontFamily: "Kanit",
  "@media(max-width: 1360px)": {
    fontSize: "60px",
  },
  "@media(max-width: 1350px)": {
    fontSize: "30px",
  },
});

export const getSubtitleStyle = (): SxProps => ({
  fontSize: "24px",
  textAlign: "center",
  fontWeight: "600",
  fontFamily: "Kanit",
  "@media(max-width: 1360px)": {
    fontSize: "24px",
  },
  "@media(max-width: 1350px)": {
    fontSize: "16px",
  },
});

export const getButtonsContainerStyle = (): SxProps => ({
  position: "absolute",
  "@media(max-width: 1360px)": {
    right: "10%",
    "> button": {
      borderWidth: "2px",
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
  },
  "@media(max-width: 1350px)": {
    bottom: 0,
    right: 0,
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "3% 15% 3% 15%",
    "> button": {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "gray",
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
        color: "gray",
        ":hover": {
          color: "#D4D4CE",
        },
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
