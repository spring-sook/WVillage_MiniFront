import axios from "axios";

const SERVER = "http://localhost:8111";

const ReviewAPI = {
  PostReview: async (postId) => {
    return await axios.get(SERVER + `/review/post/${postId}`);
  },
};

export default ReviewAPI;
