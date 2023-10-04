import { BrowserRouter as Router, Route, Routes, useActionData } from "react-router-dom";
import './App.css';
import Inventory from './pages/Inventory.js'
import Login from './pages/Login.js'
import PrintableSheet from "./pages/PrintableSheet";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Login />}/>
          <Route path="/inventory" element = {<Inventory />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/printableSheet" element = {<PrintableSheet />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
