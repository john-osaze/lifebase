import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard';
import Doctor from './pages/Doctor/Doctor';


function App() {
  return (
    <Routes>
        <Route path= "/" element = {<Doctor/>}/>
    </Routes>
  );
}

export default App;
