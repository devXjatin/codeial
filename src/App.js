import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
