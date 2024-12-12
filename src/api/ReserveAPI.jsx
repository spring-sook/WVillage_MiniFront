import axios from "axios";

const SERVER = "http://localhost:8111";

const ReserveAPI = {
  GetPostReserve: async (postId) => {
    return await axios.get(SERVER + `/reserve/post/${postId}`);
  },
  InsertReserve: async (postId, email, startTime, endTime) => {
    console.log(" : ", postId, "타입: ", typeof postId);
    console.log("시작 시간 : ", startTime, "타입: ", typeof startTime);
    console.log("종료 시간 : ", endTime, "타입: ", typeof endTime);
    const resInfo = {
      reservePost: postId,
      reserveEmail: email,
      reserveStart: startTime,
      reserveEnd: endTime,
    };
    return await axios.post(SERVER + `/reserve/reservation`, resInfo);
  },
};

export default ReserveAPI;
