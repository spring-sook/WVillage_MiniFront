import axios from "axios";

const SERVER = "http://localhost:8111";

const MemberAPI = {
  getAddr: async (email, password) => {
    return await axios.get(SERVER + `/auth/login`, {
      email: email,
      password: password,
    }).data;
  },
};
