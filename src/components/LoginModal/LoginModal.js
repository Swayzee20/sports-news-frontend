import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  handleCloseModal,
  //   data,
  isOpen,
  //   handleEmailChange,
  //   handlePasswordChange,
  //   signIn,
  handleSignUpModal,
}) {
  //   const { email, password } = data;

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     // handleCloseModal();
  //     signIn(data);
  //   }

  //   function hasInvalInput() {
  //     return (inputElement) => {
  //       return !inputElement.validity.valid;
  //     };
  //   }

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      title="Log In"
      name="login-form"
      buttonText="Log In"
    >
      <div className="login__modal">
        <div className="login__modal-inputs"></div>
        <label className="login__modal_input-label">
          <div className="login__modal_input-title">Email</div>
          <input
            className="login__modal_input"
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <label className="login__modal_input-label">
          <div className="login__modal_input-title">Password</div>
          <input
            className="login__modal_input"
            type="text"
            name="password"
            placeholder="Password"
            // value={password}
            // onChange={handlePasswordChange}
          />
        </label>
        <button
          className="login__modal_signup"
          type="button"
          onClick={handleSignUpModal}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
