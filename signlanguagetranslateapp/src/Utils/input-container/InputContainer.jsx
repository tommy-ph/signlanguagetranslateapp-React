import React from "react";
import { BiRadio } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./inputcontainer.css";
export default function InputContainer({ children, btnType, handleClick,style }) {
  return (
    <div className="input-container" style={style}>
      <BiRadio size={40} style={{ marginRight: "3px" }} />
      <div className="children-container">{children}</div>
      <button className="submit-btn" type={btnType} onClick={handleClick}>
        <AiOutlineArrowRight size={30} style={{ color: "white" }} />
      </button>
    </div>
  );
}
