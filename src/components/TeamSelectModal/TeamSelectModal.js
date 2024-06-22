import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Dropdown from "../Dropdown/Dropdown";
import { teams } from "../../Utils/Constants";
import "./TeamSelectModal.css";

function TeamSelectModal({ handleCloseModal, isOpen }) {
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      title="Teams"
      name="teamSelect-form"
      buttonText="Select Team"
    >
      <Dropdown props={teams}></Dropdown>
    </ModalWithForm>
  );
}

export default TeamSelectModal;
