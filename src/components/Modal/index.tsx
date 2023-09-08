import { Dispatch } from "react";
import { ModalBase } from "../ModalBase";
import { ModalItem } from "./ModalItem";

type ModalProps = {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<boolean>,
};

export const Modal = ({ isModalOpen, setIsModalOpen } : ModalProps)  => {
  if (!isModalOpen) {
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
    <ModalBase onClose={() => setIsModalOpen(false)}>
      {debug.map((v) => v)}
    </ModalBase>
  );
};
