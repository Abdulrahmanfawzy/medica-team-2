import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import ForgetPasswordPage from "./pages/auth/forgetPassword/ForgetPasswordPage";
import VerifyPage from "./pages/auth/verifyCode/VerifyPage";
import VerifyAccount from "./pages/auth/verifyCode/VerifyAccount";
import SuccessPage from "./pages/auth/successPass/SuccessPass";

const App = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  // const authRoutes = ["/login", "/sign-up", "/forget-password", "/verify-otp"];
  return (
    <div>
      {/* {!authRoutes.includes(pathname) && <Navbar />} */}
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/verify-otp" element={<VerifyPage />} />
        <Route path="/success-password" element={<SuccessPage />} />
      </Routes>
    </div>
  );
};

export default App;
