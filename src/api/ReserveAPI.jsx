import axios from "axios";

const SERVER = "http://localhost:8111";

const ReserveAPI = {
  GetPostReserve: async (postId) => {
    return await axios.get(SERVER + `/reserve/post/${postId}`);
  },
};

export default ReserveAPI;
