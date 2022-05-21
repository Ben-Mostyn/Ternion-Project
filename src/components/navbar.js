import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Home from "../pages/Home";
import BensPage from "../pages/BensPage";
import RhysPage from "../pages/RhysPage";

import * as FaIcons from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <nav>
        <FaIcons.FaBars
          className="hamburger"
          onClick={() => {
            !showNav ? setShowNav(true) : setShowNav(false);
          }}
        />
      </nav>
      {!showNav ? null : (
        <div className="nav-item-container">
          <Link className="nav-items" to="/">
            Home
          </Link>

          <Link className="nav-items" to="/Ben">
            Ben
          </Link>
          <Link className="nav-items" to="/Rhys">
            Rhys
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ben" element={<BensPage />} />
        <Route path="/Rhys" element={<RhysPage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
