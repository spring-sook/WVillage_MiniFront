import axios from "axios";

const SERVER = "http://localhost:8111"; // 백엔드 서버 주소

const ReportAPI = {
  getReportList: async () => {
    try {
      const response = await axios.get(SERVER + `/report/reportList`);
      return response.data; // 데이터만 반환 (더 깔끔)
    } catch (error) {
      console.error("신고 조회 중 오류 발생:", error);
      throw error; // 에러를 다시 던져서 컴포넌트에서 처리하도록 함
    }
  },
  updateReport: async (reportData) => {
    // reportId와 reportState를 포함하는 객체 받음
    try {
      const response = await axios.post(
        SERVER + `/report/updateReport`,
        reportData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("신고 상태 변경 중 오류 발생:", error);
      console.log("전송된 reportData:", reportData);
      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
        console.error("서버 응답 상태:", error.response.status);
        console.error("서버 응답 헤더:", error.response.headers);
      } else if (error.request) {
        console.error("요청:", error.request);
      } else {
        console.error("요청 설정 중 오류:", error.message);
      }
      throw error;
    }
  },
  insertReport: async (reportData) => {
    try {
      const response = await axios.post(
        SERVER + `/report/insertReport`,
        reportData
      ); // insertReport 엔드포인트 사용
      return response.status === 200;
    } catch (error) {
      console.error("신고 생성 중 오류 발생:", error);
      throw error;
    }
  },
};

export default ReportAPI;
