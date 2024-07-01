import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ErrorModal.css";

function ErrorModal({ handleCloseModal, isOpen, errorMessage, modalRef }) {
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      title="Error"
      name="error-modal"
      buttonText="Back"
      modalRef={modalRef}
    >
      <h3 className="error">{errorMessage}</h3>
    </ModalWithForm>
  );
}

export default ErrorModal;
