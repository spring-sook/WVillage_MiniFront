import axios from "axios";

const SERVER = "http://localhost:8111";

const UserProfileAPI = {
  reviewList: async (email) => {
    return await axios.get(SERVER + `/userProfile/reviews/${email}`);
  },
  getRegion: async (areaCode) => {
    return await axios.get(SERVER + `/post/getRegion/${areaCode}`);
  },
  getUserProfile: async (email) => {
    return await axios.get(SERVER + `/userProfile/profile/${email}`);
  },
};

export default UserProfileAPI;
