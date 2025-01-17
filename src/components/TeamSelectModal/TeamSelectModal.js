import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Dropdown from "../Dropdown/Dropdown";
import { TEAMS } from "../../Utils/Constants";
import "./TeamSelectModal.css";

function TeamSelectModal({
  handleCloseModal,
  isOpen,
  handleSetTeam,
  data,
  handleTeamSubmit,
  isLoggedIn,
  modalRef,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    handleTeamSubmit();
    handleCloseModal();
  }

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Teams"
      name="teamSelect-form"
      buttonText="Select Team"
      onChange={handleSetTeam}
      isLoggedIn={isLoggedIn}
      modalRef={modalRef}
    >
      <Dropdown props={TEAMS} onChange={handleSetTeam} data={data}></Dropdown>
    </ModalWithForm>
  );
}

export default TeamSelectModal;
