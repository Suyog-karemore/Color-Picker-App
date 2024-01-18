import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Exit from "./pages/Exit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </div>
  );
}

export default App;
