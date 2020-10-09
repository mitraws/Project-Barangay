import React from "react";
import "./index.css";

export default function index(props) {
  return (
    <div>
      <button className='contact-right'>{props.name} </button>
    </div>
  );
}
