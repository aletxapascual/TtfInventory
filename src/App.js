import { BrowserRouter as Router, Route, Routes, useActionData } from "react-router-dom";
import './App.css';
import Inventory from './pages/Inventory.js'
import Login from './pages/Login.js'
import PrintableSheet from "./pages/PrintableSheet"
import Sheet from "./pages/Sheet.js"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Login />}/>
          <Route path="/inventory" element = {<Inventory />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/printableSheet" element = {<PrintableSheet />}/>
          <Route path="/sheet" element = {<Sheet />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
