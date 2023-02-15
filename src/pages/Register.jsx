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
      <h2 className="mt-3">Register</h2>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="container">
            <form onSubmit={saveRegister}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Name
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Email
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="xxx@yyy.com"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="password" className="col-4 col-form-label">
                  Password
                </label>
                <div className="col-8">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Phone number
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    id="phone_number"
                    placeholder="xxx-xxx-xxxx"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
