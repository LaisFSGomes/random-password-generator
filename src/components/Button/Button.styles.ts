import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonWrapper = styled(Button)({
    background: "#F956B3",
    padding: "0.4rem 0.8rem",
    "&:hover": {
        transition: "0.5s linear",
        background: "#EB7B13",
    },
});
export const TextButton = styled(Typography)({
    color: "#FFFFFF",
    fontSize: "1.2rem",
});