import { Route, Router, Routes } from "react-router-dom"
import { AuthContext, useAuth } from "../utils/AuthContext";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import Profile from "./auth/Profile";
import Register from "./auth/Register";
import ClientError from "./ClientError";

export default ()=> {
    // AUTH context provider
    // Protected route component maken
    // firebase auth setup
    // let ctx = useAuth();
    // ctx.user ={name:'test'}
    return (
      <AuthContext.Provider value={{user:undefined}}>
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* PROTECTED */}
            <Route path="/profile" element={<Profile />} />
            {/* FALLBACK / CATCH ALL */}
            <Route path="*" element={<ClientError />} />
          </Routes>
      </AuthContext.Provider>
    )
}