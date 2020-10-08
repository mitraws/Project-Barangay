import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {"   "}
      <NavLink to="/rooms">Rooms</NavLink>
      {"   "}
      <NavLink to="/goodtoknow">Good to know</NavLink>
      {"   "}
      <NavLink to="/aboutus">About Us</NavLink>
      {"   "}
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
