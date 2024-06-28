import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import "./RegisterModal.css";
import { REGISTER_INPUTS } from "../../Utils/Constants";

function RegisterModal({
  handleCloseModal,
  isOpen,
  //   data,
  //   register,
  //   signIn,
  //   handleEmailChange,
  //   handlePasswordChange,
  //   handleNameChange,
  //   handleUrlChange,
  handleLoginModal,
}) {
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     const { email, password } = data;
  //     console.log(password);
  //     register(data);
  //   }

  function hasInvalInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  console.log(inputValues);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      title="Sign Up"
      name="register-form"
      buttonText="Sign Up"
    >
      <div className="register__modal">
        <div className="register__modal-inputs">
          {REGISTER_INPUTS.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={handleChange}
            />
          ))}

          {/* <label className="register__modal_input-title">
            <div>Email</div>
            <input
              className="register__modal_input"
              type="email"
              name="email"
              placeholder="Email"
              //   value={email}
              //   onChange={handleEmailChange}
            />
          </label> */}
          {/* <label className="register__modal_input-title">
            <div>Password</div>
            <input
              className="register__modal_input"
              type="text"
              name="password"
              placeholder="Password"
              //   value={password}
              //   onChange={handlePasswordChange}
            />
          </label> */}
          {/* <label className="register__modal_input-title">
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
          </label> */}
          <button
            className="register__modal_login"
            type="button"
            onClick={handleLoginModal}
          >
            or Log In
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
