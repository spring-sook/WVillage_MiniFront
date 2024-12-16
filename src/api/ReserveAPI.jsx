import axios from "axios";

const SERVER = "http://localhost:8111";

const ReserveAPI = {
  GetPostReserve: async (postId) => {
    return await axios.get(SERVER + `/reserve/post/${postId}`);
  },
  InsertReserve: async (postId, email, startTime, endTime) => {
    const resInfo = {
      reservePost: postId,
      reserveEmail: email,
      reserveStart: startTime,
      reserveEnd: endTime,
    };
    return await axios.post(SERVER + `/reserve/reservation`, resInfo);
  },
  MyReserveList: async (email) => {
    return await axios.get(SERVER + `/reserve/myReserveList/${email}`);
  },
  GetMyResManage: async (email) => {
    return await axios.get(SERVER + `/reserve/myReserveManagement/${email}`);
  },
  ReserveCancel: async (state, reason, reserveId) => {
    const body = {
      reserveState: state,
      reserveReason: reason,
      reserveId: reserveId,
    };
    return await axios.post(SERVER + `/reserve/reserveCancel`, body);
  },
  ReserveAccept: async (state, reserveId, point) => {
    const body = {
      reserveState: state,
      reserveId: reserveId,
      reserveTotalPrice: point,
    };
    return await axios.post(SERVER + `/reserve/reserveAccept`, body);
  },
  ReserveComplete: async (state, reserveId) => {
    const body = {
      reserveState: state,
      reserveId: reserveId,
    };
    return await axios.post(SERVER + `/reserve/reserveEnd`, body);
  },
  ReserveDeny: async (state, reason, reserveId) => {
    console.log(state, reason, reserveId);
    const body = {
      reserveState: state,
      reserveReason: reason,
      reserveId: reserveId,
    };
    return await axios.post(SERVER + `/reserve/reserveEnd`, body);
  },
  RemainPoints: async (email) => {
    return await axios.get(SERVER + `/reserve/remainPoints`, {
      params: { email: email },
    });
  },
};

export default ReserveAPI;
