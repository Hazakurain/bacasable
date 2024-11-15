import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'
import NavbarBAS from "./NavbarBAS.jsx";
import "@fontsource/roboto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Portfolio.jsx";

function App() {


  return (
    <>
        <Router>
            <Routes>
                <Route path="/" component={App} />
                <Route path="/portfolio" component={Portfolio} />
            </Routes>
        </Router>
        <NavbarBAS></NavbarBAS>
    </>
  )
}

export default App
