import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Class from "./screens/Class";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Navbar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/class/:id" element={<Navbar />} />
          <Route path="/class/:id" element={<Class />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
