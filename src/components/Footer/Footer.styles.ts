import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const FooterWrapper = styled(Box)({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    alighSelf: "flex-end",
    
    "& h1": {
        textAlign: "center",
        color: "white",
        fontSize: "2rem",
        "@media (max-width: 600px)": {
            fontSize: "1.5rem",
        },
        "@media (max-width: 300px)": {
            fontSize: "1rem",
        },
    },
});