import React from "react";
import { Box } from "@mui/material";

const AddButton = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          height: "50px",
          width: "50px",
          display: "flex",
        }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#B34684" />
              <stop offset="100%" stop-color="#B3A446" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" stroke="url(#myGradient)" />
          <path d="M8 12h8" stroke="currenColor" />
          <path d="M12 8v8" stroke="currenColor" />
        </svg>
      </Box>
      <Box
        sx={{
          height: "35px",
          width: "35px",
          display: "flex",
          position: "absolute",
        }}
      >
        <svg
          viewBox="0 0 448 512"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="plusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B34684" />
              <stop offset="100%" stopColor="#B3A446" />
            </linearGradient>
          </defs>
          <path
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            stroke="currentColor"
            fill="url(#plusGradient)"
            strokeWidth="0"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default AddButton;
