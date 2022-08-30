import React from "react";
import buttonImage from '/assets/akar-icons_circle-plus-fill.png'
import { Link } from "react-router-dom";
import "./ButtonAddAct.css";

function ButtonAddAct() {
    const buttonSize = {
        height: '70px'
    }
  return (
    <div>
      <Link to='/user/new'>
        <img src={buttonImage} alt="" style={buttonSize}/>
      </Link>
    </div>
  );
}

export default ButtonAddAct;
