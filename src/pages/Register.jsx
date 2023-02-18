import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();
  let [register, setRegister] = useState({});

  const saveRegister = (e) => {
    e.preventDefault();
    if (UserService && typeof UserService.create === "function") {
      UserService.create(register)
        .then((res) => {
          swal({
            icon: "success",
            text: "Register complete",
            title: "Result",
          });
          navigate("/login");
        })
        .catch((e) => {
          swal({
            icon: "error",
            text: "Register failed",
            title: "Result",
          });
          console.log(e);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };
  return (
    <MainLayout>
      <h2 className="mt-3">𝗦𝗶𝗴𝗻 𝗨𝗽</h2>
      <hr />
      <div className="display-login">
        <div className="wrapper">
          <div className="title">🔒 สมัครสมาชิก</div>
          <form onSubmit={saveRegister}>
            <div className="field">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="name"
                onChange={handleInputChange}
              />
              <label>Name</label>
            </div>
            <div className="field">
              <input
                type="text"
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
                placeholder="password"
                onChange={handleInputChange}
              />
              <label>Password</label>
            </div>
            <div className="field">
              <input
                type="text"
                className="form-control"
                name="phone_number"
                id="phone_number"
                placeholder="xxx-xxx-xxxx"
                onChange={handleInputChange}
              />
              <label>Phone number</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="field">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
