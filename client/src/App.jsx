import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function AppContent() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/SignUp" && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<Login />} />
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
