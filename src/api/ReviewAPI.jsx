import axios from "axios";

const SERVER = "http://localhost:8111";

const ReviewAPI = {
  PostReview: async (postId) => {
    return await axios.get(SERVER + `/review/post/${postId}`);
  },
  WriteReview: async (email, reserveId, tags) => {
    console.log(email, reserveId, tags);
    return await axios.post(SERVER + `/review/write`, null, {
      params: { email: email, reserve: reserveId, tags: tags },
    });
  },
  IsReview: async (email, reserveId) => {
    return await axios.get(SERVER + `/review/isReview`, {
      params: { email: email, reserve: reserveId },
    });
  },
};

export default ReviewAPI;
