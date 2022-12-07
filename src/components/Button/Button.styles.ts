import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonWrapper = styled(Button)({
    background: "#BBBFCA",
    padding: "0.1rem 0.6rem",
    "&:hover": {
        background: "#BBBBBB",
    },
    "& span": {
        textTransform: "none",
    },
});