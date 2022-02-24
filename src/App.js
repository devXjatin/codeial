import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home"
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthProvider from './Context/Auth';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact={true} path = "/" element={<Home/>}/>
      <Route exact={true} path = "/register" element={<Register/>}/>
      <Route exact={true} path = "/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
