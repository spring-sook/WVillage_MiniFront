import axios from "axios";

const SERVER = "http://localhost:8111";

const AuthAPI = {
  login: async (email, password) => {
    return await axios.post(SERVER + "/auth/login", { email, password });
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
    try {
      console.log("비밀번호 재설정 요청: ", {
        email,
        newPassword,
        confirmPassword,
      });

      const response = await axios.post(SERVER + `/auth/password-reset`, {
        email,
        newPassword,
        confirmPassword,
      });

      console.log("서버 응답 데이터:", response.data);
      return response;
    } catch (error) {
      console.error(
        "비밀번호 재설정 요청 실패:",
        error.response || error.message
      );

      throw new Error(
        error.response?.data || "비밀번호 재설정 중 오류가 발생했습니다."
      );
    }
  },

  signup: async (data) => {
    try {
      const response = await axios.post(SERVER + `/auth/signup`, data);
      return response;
    } catch (error) {
      console.error("회원가입 요청 실패:", error.response || error.message);
      throw error;
    }
  },
  EditProfile: async (data) => {
    const response = await axios.post(SERVER + `/auth/edit-profile`, data);
  },
  EditProfileImg: async (email, imgUrl) => {
    const response = await axios.post(SERVER + `/auth/editProfileImg`, null, {
      params: {
        email: email,
        imgUrl: imgUrl,
      },
    });
  },
  SignOut: async (email) => {
    const response = await axios.post(SERVER + `/auth/signout`, null, {
      params: { email: email },
    });
  },
};

export default AuthAPI;
