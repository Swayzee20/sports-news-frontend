import { React, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormInput from "../FormInput/FormInput";
import "./LoginModal.css";
import { LOGIN_INPUTS } from "../../Utils/Constants";

function LoginModal({
  handleCloseModal,
  //   data,
  isOpen,
  //   handleEmailChange,
  //   handlePasswordChange,
  //   signIn,
  handleSignUpModal,
  modalRef,
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

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      title="Log In"
      name="login-form"
      buttonText="Log In"
      modalRef={modalRef}
    >
      <div className="login__modal">
        <div className="login__modal-inputs">
          {LOGIN_INPUTS.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={handleChange}
            />
          ))}
          {/* <label className="login__modal_input-title">
            <div>Email</div>
            <input
              className="login__modal_input"
              type="email"
              name="email"
              placeholder="Email"
              // value={email}
              // onChange={handleEmailChange}
            />
          </label>
          <label className="login__modal_input-title">
            <div>Password</div>
            <input
              className="login__modal_input"
              type="text"
              name="password"
              placeholder="Password"
              // value={password}
              // onChange={handlePasswordChange}
            />
          </label> */}
          <button
            className="login__modal_signup"
            type="button"
            onClick={handleSignUpModal}
          >
            or Sign Up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
