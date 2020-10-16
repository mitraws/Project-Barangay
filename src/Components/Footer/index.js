import React from "react";
import "./index.css";

export default function index() {
  return (
    <div className="outer_footer">
      <div className="footer_color">
        <footer>
          <div className="footerGrid">
            <div>
              <h5>Barangay B&B </h5>
              <h5>Wimmo & Godwin</h5>
              <h5>Herenstraat 26</h5> <h5>1015CB, Amsterdam </h5>
              <h5>The Netherlands</h5>
            </div>
            <div>
              <h5>Rooms</h5>
              <h5>Good To Know</h5>
              <h5>About Us</h5>
              <h5>Contact</h5>
            </div>
            <div>
              <h5>Email: rooms@barangay.nl</h5>
              <h5>Telephone: +31 (0) 62504 5432</h5>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
