import axios from "axios";

const SERVER = "http://localhost:8111";

const AuthAPI = {
  login: async (email, password) => {
    const response = await axios.post(SERVER + `/auth/login`, {
      email,
      password,
    });
    return response.data;
  },

  FindEmail: async (name, phone) => {
    const params = {
      name: name,
      phone: phone,
    };
    const response = await axios.get(SERVER + `/auth/find-email`, {
      params,
    });
    console.log("결과: ", response);
    return response.data;
  },

  requestPasswordReset: async (email, phone) => {
    const response = await axios.post(SERVER + `/auth/password-reset-request`, {
      email,
      phone,
    });
    return response.data;
  },
  resetPassword: async (email, newPassword, confirmPassword) => {
    const response = await axios.post(SERVER + `/auth/password-reset`, {
      email,
      newPassword,
      confirmPassword,
    });
    return response.data;
  },
};

export default AuthAPI;
