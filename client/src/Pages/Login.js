import React from "react";
import Register from "../component/Register";
import LogiN from "../component/LogiN";
import { useSelector } from "react-redux";

const LoginPage = () => {
   const isLogin = useSelector((state) => state.login.loginTogle)
  return (
    <div>
      <div className="py-32">
        {isLogin? <Register />:<LogiN />}
        
      </div>
    </div>
  );
};

export default LoginPage;
