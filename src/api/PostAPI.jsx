import axios from "axios";

const SERVER = "http://localhost:8111";

const PostAPI = {
  // 기본 전체 조회
  CommonAllList: async (region) => {
    return await axios.get(SERVER + `/board/CommonAllList/${region}`);
  }
}

export default PostAPI;