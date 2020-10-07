import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink>Home</NavLink>
      {"   "}
      <NavLink>Rooms</NavLink>
      {"   "}
      <NavLink>Good to know</NavLink>
      {"   "}
      <NavLink>About Us</NavLink>
      {"   "}
      <NavLink>Contact</NavLink>
    </div>
  );
}
