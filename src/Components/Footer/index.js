import React from "react";
import "./index.css";

export default function index() {
  return (
    <div className="outer_footer">
      <div className='footer_color'>
        <footer>
          <div className='footerGrid'>
            <div>
              <p>Barangay B&B </p>
              <p>Wimmo & Godwin</p> <p>Herenstraat 26</p>{" "}
              <p>1015CB, Amsterdam </p>
              <p>The Netherlands</p>
            </div>
            <div>
              <p>Rooms</p>

              <p>Good To Know</p>

              <p>About Us</p>

              <p>Contact</p>
            </div>
            <div>
              <p>Email: rooms@barangay.nl</p>
              <p>Telephone: +31 (0) 62504 5432</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
