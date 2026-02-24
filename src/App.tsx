<<<<<<< HEAD
import { Routes, Route, useLocation } from "react-router-dom";
import Booking from "./pages/booking/Booking";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import ForgetPasswordPage from "./pages/auth/forgetPassword/ForgetPasswordPage";
import VerifyPage from "./pages/auth/verifyCode/VerifyPage";
import VerifyAccount from "./pages/auth/verifyCode/VerifyAccount";
import SuccessPage from "./pages/auth/successPass/SuccessPass";
import Navbar from "./components/layout/Navbar";
import FindDoctor from "./pages/FindDoctor";

const App = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const authRoutes = [
    "/login",
    "/sign-up",
    "/forget-password",
    "/verify-account",
    "/verify-otp",
    "success-password",
  ];
=======

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
>>>>>>> 12e78ba6b6417a9cd9356b5c45f2f66724664611

  return (
    <div>
      {!authRoutes.includes(pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/verify-otp" element={<VerifyPage />} />
        <Route path="/success-password" element={<SuccessPage />} />
        {/* booking routes */}
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>

  );
};
export default App;
