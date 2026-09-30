import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import SellerLogin from "./pages/SellerLogin";
import UserSignup from "./pages/UserSignup";
import SellerSignup from "./pages/SellerSignup";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/seller-signup" element={<SellerSignup />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;