import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'
import NavbarBAS from "./NavbarBAS.jsx";
import "@fontsource/roboto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import TestsJV  from "./TestsJV.jsx";
import Hobbies from "./Hobbies.jsx";

function App() {


  return (
    <>
        <NavbarBAS></NavbarBAS>
        <Router>
            <Routes>
                <Route path="/" component={App} />
                <Route path="/home" component={<Home/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/testsjv" element={<TestsJV/>} />
                <Route path="/hobbies" element={<Hobbies/>} />
            </Routes>
        </Router>

    </>
  )
}

export default App
