import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "1px solid gray",
  borderRadius: "5px",
  width: "50%",
  "@media (max-width: 600px)": {
    width: "70%",
  },
  "@media (max-width: 300px)": {
    width: "90%",
  },
});

export const Text = styled(Typography)({});
