import { ModalBase } from "../ModalBase";
import { ModalItem } from "./ModalItem";

export const Modal = (props) => {
  if (!props.isModalOpen) {
    return <></>;
  }

  const debug = [
    <ModalItem />,
    <ModalItem />,
    <ModalItem />,
    <ModalItem />,
    <ModalItem />,
  ];

  return (
    <ModalBase onClose={() => props.setIsModalOpen(false)}>
      {debug.map((v) => v)}
    </ModalBase>
  );
};
