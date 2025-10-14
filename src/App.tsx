import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import PublicLayout from "./components/PublicLayout";
import HomeLayout from "./components/HomePageLayout";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages (Signup, Login) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Home page with account navbar */}
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
