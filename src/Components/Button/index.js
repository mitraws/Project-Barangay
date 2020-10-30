import React from "react";

import "./index.css";

export default function index(props) {
  function external(e) {
    e.preventDefault();
    window.location.href =
      "https://reservations.cubilis.eu/bbbarangay-amsterdam?Language=en-GB";
  }

  return (
    <div>
      <button className="contact-right" onClick={external}>
        {props.name}
      </button>
    </div>
  );
}
