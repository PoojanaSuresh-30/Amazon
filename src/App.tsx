import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import LoginPage from "./components/Login/Login";
import PublicLayout from "./components/Layout/PublicLayout";
import HomeLayout from "./components/Layout/HomePageLayout";
import HomePage from "./components/HomePage/Home";
import Wishlist from "./components/Wishlist/Wishlist";
import CartPage from "./components/Cart/Cart";
import ProfilePage from "./components/Profile/Profile";



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
          <Route path="/cart" element = {<CartPage/>}/>
          <Route path="/profile" element = {<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
