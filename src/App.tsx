
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";
import Button from "./components/Button";
import Home from "./pages/home";
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/" element={<Home />} />
      </Routes>
    
      
      
  
      
    </>
  )
}

export default App
