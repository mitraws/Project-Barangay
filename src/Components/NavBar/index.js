import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/index.js";
import Logo from "../Logo/index.js";
import "./index.css";

export default function index() {
  return (
    <div className="navigation_bar">
      {/* <Logo /> */}
      <NavLink to="/">
        <Logo />
      </NavLink>
      {"   "}
      <NavLink to="/rooms">Rooms</NavLink>
      {"   "}
      <NavLink to="/goodtoknow">Good to know</NavLink>
      {"   "}
      <NavLink to="/aboutus">About Us</NavLink>
      {"   "}
      <NavLink to="/contact">Contact</NavLink>

      <Button />
    </div>
  );
}
