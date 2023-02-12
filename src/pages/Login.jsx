import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
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
        console.log(loginData)
        UserService.login(loginData)
            .then((res)=>{
                if (res.data.success) {
                    swal("You are logged in.", {
                        icon: "success",
                        title: "Result"
                      });
                    navigate('/product')
                    } else{
                        swal("Bad login. Please try again.", {
                            icon: "warning",
                            title: "Result"
                          });
                    }
                    console.log(res.data)
                }
            )
            .catch((err)=>{
                swal("Bad login. Please try again.", {
                    icon: "warning",
                    title: "Result"
                  });
                console.log(err);
            })
    }
  return (
    <MainLayout>
        <h2 className="mt-3">Login</h2>
        <hr />
        <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={doLogin}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                E-mail
              </label>
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="xxx@yyy.com"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
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
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
