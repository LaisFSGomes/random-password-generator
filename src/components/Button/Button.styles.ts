import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonWrapper = styled(Button)({
    background: "#F956B3",
    padding: "0.4rem 0.8rem",
    "&:hover": {
        transition: "0.5s linear",
        background: "#EB7B13",
    },
    "@media (max-width: 750px)": {
        margin: "0.5rem 0rem",
        width: "60%",
    },
    "@media (max-width: 450px)": {
        margin: "0.3rem 0rem",
        width: "100%",
    },
});
export const TextButton = styled(Typography)({
    color: "#FFFFFF",
    fontSize: "1.2rem",
    "@media (max-width: 450px)": {
        fontSize: "0.9rem",
    },
});