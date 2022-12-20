import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    background: "linear-gradient(313deg, rgba(249,86,179,1) 43%, rgba(235,125,14,1) 100%)",
    alighSelf: "flex-end",
    padding: "10px",
});
export const Title = styled(Typography)({
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "1rem",
    "@media (max-width: 600px)": {
        fontSize: "0.8rem",
    },
    "@media (max-width: 350px)": {
        fontSize: "0.7rem",
    },
});