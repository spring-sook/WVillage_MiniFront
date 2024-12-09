import axios from "axios";

const SERVER = "http://localhost:8111";

const AuthAPI = {
  getAddr: async (email, password) => {
    return await axios.get(SERVER + `/auth/login`, { email, password }).data;
  },
};

export default AuthAPI;
