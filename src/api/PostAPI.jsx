import axios from "axios";

const SERVER = "http://localhost:8111";

const PostAPI = {
  // 기본 전체 조회
  CommonAllList: async (region) => {
    return await axios.get(SERVER + `/board/CommonAllList/${region}`);
  },
  PostWrite: async (
    email,
    category,
    title,
    content,
    price,
    region,
    location
  ) => {
    const postWrite = {
      email: email,
      category: category,
      title: title,
      content: content,
      price: price,
      region: region,
      location: location,
    };
    return await axios.post(SERVER + `/post/postWrite`, postWrite);
  },
};

export default PostAPI;
