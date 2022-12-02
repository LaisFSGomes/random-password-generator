import { styled } from "@mui/system";
import { Box } from "@mui/material";
import AppBar from '@mui/material/AppBar'

export const AppWrapper = styled(AppBar)({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    "& h1": {
        textAlign: "center",
        fontSize: "2rem",
        "@media (max-width: 600px)": {
            fontSize: "1.5rem",
        },
        "@media (max-width: 300px)": {
            fontSize: "1rem",
        },
    },
});