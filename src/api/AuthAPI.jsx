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
};

export default AuthAPI;
