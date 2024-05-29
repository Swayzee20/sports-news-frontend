import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal(
  {
    //   handleCloseModal,
    //   isOpen,
    //   data,
    //   register,
    //   signIn,
    //   handleEmailChange,
    //   handlePasswordChange,
    //   handleNameChange,
    //   handleUrlChange,
    //   handleLoginModal,
  }
) {
  //   const { name, avatar, email, password } = data;

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     const { email, password } = data;
  //     console.log(password);
  //     register(data);
  //   }

  return (
    <ModalWithForm
      //   onClose={handleCloseModal}
      //   isOpen={isOpen}
      //   onSubmit={handleSubmit}
      title="Sign Up"
      name="register-form"
      buttonText="Sign Up"
    >
      <div className="register__modal">
        <div className="register__modal-inputs">
          <label className="register__modal_input-title">
            <div>Email</div>
            <input
              className="register__modal_input"
              type="email"
              name="email"
              placeholder="Email"
              //   value={email}
              //   onChange={handleEmailChange}
            />
          </label>
          <label className="register__modal_input-title">
            <div>Password</div>
            <input
              className="register__modal_input"
              type="text"
              name="password"
              placeholder="Password"
              //   value={password}
              //   onChange={handlePasswordChange}
            />
          </label>
          <label className="register__modal_input-title">
            <div>Name</div>
            <input
              className="register__modal_input"
              type="text"
              name="name"
              placeholder="Name"
              //   value={name}
              //   onChange={handleNameChange}
            />
          </label>
          <label className="register__modal_input-title">
            <div>Avatar URL</div>
            <input
              className="register__modal_input"
              type="link"
              name="link"
              placeholder="Avatar URL"
              //   value={avatar}
              //   onChange={handleUrlChange}
            />
          </label>
          <button
            className="register__modal_login"
            type="button"
            // onClick={handleLoginModal}
          >
            or Log In
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
