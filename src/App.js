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

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Ben">Ben</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ben" element={<BensPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
