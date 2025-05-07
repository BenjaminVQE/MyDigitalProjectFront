import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion/connexion";
import Inscription from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import "./App.css";



function App() {
  return (
    <>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
