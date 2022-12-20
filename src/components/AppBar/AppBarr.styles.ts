import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const AppBarBox = styled(Box)({
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100px',
    paddingTop: "10px",
    "@media (max-width: 600px)": {
        height: "75px",
        fontSize: "0.8rem",
    },
    "@media (max-width: 350px)": {
        height: "50px",
        fontSize: "0.7rem",
    },
});
export const Title = styled(Typography)({
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "2rem",
    "@media (max-width: 600px)": {
        fontSize: "1.6rem",
    },
    "@media (max-width: 350px)": {
        fontSize: "1.4rem",
    },
});
export const Waves = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: "rotate(180deg)",
    height: "150px",
    background: "linear-gradient(313deg, rgba(249,86,179,1) 43%, rgba(235,125,14,1) 100%)",
    "& svg": {
        position: "relative",
        display: "block",
        width: "calc(117% + 1.3px)",
        height: "50px",
        "& .shape-fill": {
            fill: "#FFFFFF",
        },
    },
    "@media (max-width: 600px)": {
        width: "calc(152% + 1.3px)",
        height: "100px",
    },
});