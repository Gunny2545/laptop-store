import http from "../http-common.js";

const login = (loginData) =>{
  return http.post("/user/login", loginData);
}

const register = (userData)=>{
  return http.post("/user/register", userData);
}

const create = (data) => {
  return http.post("/user/register", data);
};

const UserService = {
    login,
    register,
    create
}

export default UserService