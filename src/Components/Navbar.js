import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Link id="logo" to="/" className="brand-name">
        Landkit.
      </Link>
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
        className="toggle-btn"
      >
        |||
      </button>
      <div
        className={`navigation-menu ${
          expanded ? "navigation-menu-expanded" : ""
        }`}
      >
        <ul>
          <li>
            <Link to="/landings">Landings</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li>
            <Link id="buy-now" to="/buynow">
              Buy Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
