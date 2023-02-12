import http from "../http-common.js";

const login = (loginData) =>{
  return http.post("/user/login", loginData);
}

const register = (userData)=>{
  return http.post("/user/register", userData);
}

const UserService = {
    login,
    register
}

export default UserService