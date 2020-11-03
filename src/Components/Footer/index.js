import React from "react";
import { NavLink } from "react-router-dom";
// import "./index.css";

export default function index() {
  return (
        <footer>
            <div>
              <h5>Barangay B&B</h5>
              <h5>Wimmo & Godwin</h5>
              <h5>Herenstraat 26</h5> <h5>1015CB, Amsterdam </h5>
              <h5>The Netherlands</h5>
            </div>
            <div>
              <h5>
                <NavLink to="/rooms">Rooms</NavLink>
              </h5>
              <h5>
                <NavLink to="/goodtoknow">Good to know</NavLink>
              </h5>
              <h5>
                <NavLink to="/aboutus">About Us</NavLink>
              </h5>
              <h5>
                <NavLink to="/contact">Contact</NavLink>
              </h5>
            </div>
            <div>
              <h5>Email: rooms@barangay.nl</h5>
              <h5>Telephone: +31 (0) 62504 5432</h5>
            </div>
        </footer>
  );
}
