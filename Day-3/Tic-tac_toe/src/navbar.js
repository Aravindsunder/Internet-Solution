import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [active, setActive] = useState({
    form: false,
    tictactoe: false,
  });

  function handleActiveState(event) {
    if (event.target.innerHTML == "Form") {
      setActive({
        form: true,
        tictactoe: false,
      });
    } else if (event.target.innerHTML == "TicTacToe") {
      setActive({
        form: false,
        tictactoe: true,
      });
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={`${"nav-link"} ${active.form == true ? "active" : ""}`}
              onClick={handleActiveState}
              to="/form"
            >
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`${"nav-link"} ${
                active.tictactoe == true ? "active" : ""
              }`}
              onClick={handleActiveState}
              to="/game"
            >
              TicTacToe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
