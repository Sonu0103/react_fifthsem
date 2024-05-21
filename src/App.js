import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Registerpage from "./pages/register/Registerpage";
import Navbar from "./components/Navbar";
import Loginpage from "./pages/login/Loginpage";

//  Toast config
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registerpage />} />
        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Login Route */}
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;

// Create seperate page for login and register
