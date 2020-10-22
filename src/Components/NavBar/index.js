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
      <NavLink
        to="/rooms"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Rooms
      </NavLink>
      {"   "}
      <NavLink
        to="/goodtoknow"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Good to know
      </NavLink>
      {"   "}
      <NavLink
        to="/aboutus"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        About Us
      </NavLink>
      {"   "}
      <NavLink
        to="/contact"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Contact
      </NavLink>

      <Button name="Book Now" />
    </div>
  );
}
