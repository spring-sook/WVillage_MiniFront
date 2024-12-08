import axios from "axios";

const SERVER = "http://localhost:8111";

const PostAPI = {
  // 기본 전체 조회
  CommonAllList: async (region) => {
    return await axios.get(SERVER + `/board/commonAllList/${region}`);
  },
  CommonCategoryList: async (region, category) => {
    const params = {
      region: region,
      category: category,
    };
    return await axios.get(SERVER + `/board/commonCategoryList`, { params });
  },
  PostWrite: async (
    email,
    category,
    title,
    content,
    price,
    region,
    location,
    imgUrls
  ) => {
    const postWrite = {
      postEmail: email,
      postCat: category,
      postTitle: title,
      postContent: content,
      postPrice: price,
      postRegion: region,
      postLocation: location,
    };
    try {
      console.log(postWrite);
      console.log(imgUrls);
      const insertPost = await axios.post(SERVER + `/post/postWrite`, {
        postVo: postWrite,
        imgUrls: imgUrls,
      });
      if (insertPost.data) {
        return insertPost.data; // 반환된 postId 사용
      } else {
        throw new Error("게시글 작성 실패");
      }
    } catch (error) {
      console.error("게시글 작성 중 오류 발생", error);
      alert("게시글 작성 중 오류 발생");
    }
  },
};

export default PostAPI;
