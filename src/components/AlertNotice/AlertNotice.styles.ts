import { styled } from "@mui/system";
import { Box, Modal, Typography } from "@mui/material";

export const Alert = styled(Modal)({});
export const ModalWrapper = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FAFAFA",
    borderRadius: "5px",
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    "@media (min-width: 600px)": {
        width: "30%",
    }
});
export const ModalTextWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
});
export const ModalTitle = styled(Typography)({
    color: "#EB7B13",
    fontWeight: "bold",
    textShadow: "0.1em 0.1em 0.2em rgba(247, 90, 159, 0.1)",
});
export const ModalDescription = styled(Typography)({
    color: "#EB7B13",
    textShadow: "0.1em 0.1em 0.1em rgba(247, 90, 159, 0.1)",
});
