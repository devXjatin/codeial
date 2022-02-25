import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home"
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthProvider from './Context/Auth';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<PrivateRoute/>}>
      <Route exact path = "/" element={<Home/>}/>
      </Route>
      <Route  path = "/register" element={<Register/>}/>
      <Route  path = "/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
