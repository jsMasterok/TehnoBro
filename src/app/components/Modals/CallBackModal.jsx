"use client";

import Modal from "react-modal";

export default function CallBackModal({ isOpen }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div></div>
    </Modal>
  );
}
