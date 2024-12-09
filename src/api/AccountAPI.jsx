import axios from "axios";

const SERVER = "http://localhost:8111";

const AccountAPI = {
  addAccount: async (email, bank, accountNumber) => {
    try {
      console.log("서버에 전달되는 데이터:", { email, bank, accountNumber }); // 서버로 보내는 데이터 확인
      const response = await axios.post(SERVER + "/account/add", {
        accountNo: accountNumber,
        accountBank: bank,
        accountEmail: email, // 이메일 추가
      });
      return response.data; // 서버에서 true/false 반환
    } catch (error) {
      console.error(
        "계좌 추가 API 호출 실패:",
        error.response || error.message || error
      );
      return false;
    }
  },
};

export default AccountAPI;
