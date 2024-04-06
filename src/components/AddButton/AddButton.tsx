import React from "react";
import { Box } from "@mui/material";

export interface AddButtonProps {
  minus?: boolean;
  degrade?: boolean;
}

const AddButton = React.forwardRef<HTMLDivElement, AddButtonProps>(
  ({ minus, degrade }, ref) => {
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            height: "25px",
            width: "25px",
            display: "flex",
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={degrade ? "#B34684" : "#FFFFF7"} />
                <stop
                  offset="100%"
                  stopColor={degrade ? "#B3A446" : "#FFFFF7"}
                />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" stroke="url(#myGradient)" />
          </svg>
        </Box>
        <Box
          sx={{
            height: "15px",
            width: "15px",
            display: "flex",
            position: "absolute",
          }}
        >
          {minus ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="plusGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor={degrade ? "#B34684" : "#FFFFF7"}
                  />
                  <stop
                    offset="100%"
                    stopColor={degrade ? "#B3A446" : "#FFFFF7"}
                  />
                </linearGradient>
              </defs>
              <path
                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                fill="url(#plusGradient)"
              ></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 448 512"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="plusGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
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
          )}
        </Box>
      </Box>
    );
  }
);

export default AddButton;
