import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home"
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact={true} path = "/" element={<Home/>}/>
      <Route exact={true} path = "/register" element={<Register/>}/>
      <Route exact={true} path = "/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
