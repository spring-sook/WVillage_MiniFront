import axios from "axios";

const SERVER = "http://localhost:8111";

const UserProfileAPI = {
  getReviewList: async (email) => {
    return await axios.get(SERVER + `/review/userProfile/${email}`);
  },
  getRegion: async (areaCode) => {
    return await axios.get(SERVER + `/post/getRegion/${areaCode}`);
  },
  getPostList: async (email) => {
    return await axios.get(SERVER + `/board/userProfile/${email}`);
  },
  getUserProfile: async (postId) => {
    return await axios.get(SERVER + `/userProfile/post/${postId}`);
  },
  getOtherUserProfile: async (email) => {
    return await axios.get(SERVER + `/userProfile/profile/${email}`);
  },
  getAlarm: async (email) => {
    const params = { email: email };
    return await axios.get(SERVER + `/userProfile/reserveMsg`, { params });
  },
};

export default UserProfileAPI;
