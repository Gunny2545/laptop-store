import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import "../pages/csslogin/login.css";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  let [loginData, setLoginData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const doLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    UserService.login(loginData)
      .then((res) => {
        if (res.data.success) {
          swal("You are logged in.", {
            icon: "success",
            title: "Result",
          });
          navigate("/");
        } else {
          swal("Bad login. Please try again.", {
            icon: "warning",
            title: "Result",
          });
        }
        console.log(res.data);
      })
      .catch((err) => {
        swal("Bad login. Please try again.", {
          icon: "warning",
          title: "Result",
        });
        console.log(err);
      });
  };
  return (
    <MainLayout>
      <h2 className="mt-3">Sign In</h2>
      <hr />
      <div className="display-login">
        <div className="wrapper">
          <div className="title">🔒 Sign In</div>
          <form onSubmit={doLogin}>
            <div className="field">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="xxx@yyy.com"
                onChange={handleInputChange}
              />
              <label>Email</label>
            </div>

            <div className="field">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Your password"
                onChange={handleInputChange}
              />
              <label>Password</label>
            </div>

            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="field">
              <input type="submit" defaultValue="Login" />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
