import React from "react";
import "./Dropdown.css";

function Dropdown({ props, onChange }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="dropdown">
      <h3 className="dropdown__title">Select Your Team</h3>
      <select className="dropdown__options" onChange={onChange}>
        <option value="option 1" value1="Dallas Cowboys">
          Teams
        </option>
        {props.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
