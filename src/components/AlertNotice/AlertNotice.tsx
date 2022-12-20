import React from "react";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Alert,
  ModalDescription,
  ModalTextWrapper,
  ModalTitle,
  ModalWrapper,
} from "./AlertNotice.styles";

interface AlertNoticeProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
}
export const AlertNotice: React.FC<AlertNoticeProps> = ({
  open,
  handleClose,
  title,
  description,
}) => {
  return (
    <Alert
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <CheckCircleIcon sx={{ fontSize: 50, color: "#F95DB8" }} />
        <ModalTextWrapper>
          <ModalTitle id="modal-modal-title" variant="h6">
            {title}
          </ModalTitle>
          <ModalDescription id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </ModalDescription>
        </ModalTextWrapper>
      </ModalWrapper>
    </Alert>
  );
};
