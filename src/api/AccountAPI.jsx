import axios from "axios";

const SERVER = "http://localhost:8111";

const AccountAPI = {
  addAccount: async (email, bank, accountNumber) => {
    try {
      console.log("서버에 전달되는 데이터:", { email, bank, accountNumber });
      const response = await axios.post(SERVER + "/account/add", {
        accountNo: accountNumber,
        accountBank: bank,
        accountEmail: email,
      });
      return response.data;
    } catch (error) {
      console.error(
        "계좌 추가 API 호출 실패:",
        error.response || error.message || error
      );
      return false;
    }
  },

  deleteAccount: async (accountNo, accountBank) => {
    try {
      const response = await axios.delete(SERVER + "/account/delete", {
        params: { accountNo, accountBank },
      });
      return response.data;
    } catch (error) {
      console.error(
        "계좌 삭제 API 호출 실패:",
        error.response || error.message || error
      );
      return false;
    }
  },
};

export default AccountAPI;
