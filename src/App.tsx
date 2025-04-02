import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./pages/connexion"; // Importe ta page Connexion
import Button from "./components/Button";
import './App.css'



function App() {

  return (
    <>
      
      <h1>Bienvenue sur l'accueil</h1>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      {/* <Button to="/connexion" text="Se connecter" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/> {/* Bouton pour aller à Connexion */}
      
  
      
    </>
  )
}

export default App
