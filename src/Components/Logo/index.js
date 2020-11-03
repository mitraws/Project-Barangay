import React from "react";
import "./index.css";

export default function index() {
  return (
      <div className="logo_div">
        <img
          className="logo_img"
          alt="logo"
          src={require("../../Images/logo.png")}
        />
      </div>
  );
}
