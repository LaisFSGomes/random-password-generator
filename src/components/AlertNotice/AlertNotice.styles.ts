import { styled } from "@mui/system";
import { Box, Modal, Typography } from "@mui/material";

export const Alert = styled(Modal)({});
export const ModalWrapper = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    borderRadius: "5px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
});
export const ModalTitle = styled(Typography)({});
export const ModalDescription = styled(Typography)({});
