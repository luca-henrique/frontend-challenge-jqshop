import { Modal, ModalProps } from "@mui/material";

interface IModal extends ModalProps { }

export const ModalComponent = ({ children, open, ...props }: IModal) => {
  if (!open) {
    return <></>
  }

  return (
    <Modal {...props} open={open}>
      {children}
    </Modal>
  );
};
