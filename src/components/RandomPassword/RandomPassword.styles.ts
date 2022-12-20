import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F1F1F1",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
});

export const Text = styled(Typography)({
  fontSize: "1.7rem",
  fontWeight: "bold",
  color: "#EE7336",
  "@media (max-width: 500px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1rem",
  },
});
