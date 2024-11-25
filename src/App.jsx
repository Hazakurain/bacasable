import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import "@fontsource/roboto";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage.jsx";
import Portfolio from "./Portfolio.jsx";
import TestsJV  from "./TestsJV.jsx";
import Hobbies from "./Hobbies.jsx";

function App() {
  return (
    <>

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/testsjv" element={<TestsJV/>} />
                <Route path="/hobbies" element={<Hobbies/>} />
            </Routes>
        </Router>

    </>
  )
}

export default App
