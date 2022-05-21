import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import BensPage from "./pages/BensPage";
import RhysPage from "./pages/RhysPage";

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
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
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ben" element={<BensPage />} />
          <Route path="/Rhys" element={<RhysPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
