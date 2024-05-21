import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./modules/Navbar";

export default function Server() {

    return (
    <div>
        <Router>
            <Navbar />
            <div style={{paddingTop: '5em'}} />
            <Routes>
            
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </div>
        
    );
}
