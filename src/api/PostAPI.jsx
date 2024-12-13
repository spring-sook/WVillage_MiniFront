import axios from "axios";

const SERVER = "http://localhost:8111";

const PostAPI = {
  // 특정 지역 게시물 전체 조회
  CommonAllList: async (region) => {
    return await axios.get(SERVER + `/board/postList/${region}`);
  },
  // 특정 지역+카테고리 게시물 조회
  CommonCategoryList: async (region, category) => {
    const params = {
      region: region,
      category: category,
    };
    return await axios.get(SERVER + `/board/postList`, { params });
  },
  // 게시물 검색
  SearchPostList: async (region, category, keyword) => {
    const params = {
      region: region,
      category: category,
      keyword: keyword,
    };
    return await axios.get(SERVER + `/board/postList`, { params });
  },
  // 특정 유저가 작성한 게시물 조회
  UserPostList: async (email) => {
    return await axios.get(SERVER + `/board/userProfile/${email}`);
  },
  // 북마크한 게시글 리스트 조회
  BookmarkedPostList: async (email) => {
    return await axios.get(SERVER + `/bookmark/bookmarkedList`, {
      params: { email: email },
    });
  },
  // 작성한 게시물(내용 + 이미지) 삽입
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
    }
  },
  PostContentDetail: async (postId) => {
    return await axios.get(SERVER + `/post/details/${postId}`);
  },
  PostImages: async (postId) => {
    return await axios.get(SERVER + `/post/images/${postId}`);
  },
  PostView: async (postId) => {
    return await axios.post(SERVER + `/post/postView/${postId}`);
  },
  InsertBookmark: async (postId, email) => {
    return await axios.post(SERVER + `/bookmark/insertBookmark`, {
      postId: postId,
      email: email,
    });
  },
  DeleteBookmark: async (postId, email) => {
    return await axios.post(SERVER + `/bookmark/deleteBookmark`, {
      postId: postId,
      email: email,
    });
  },
  IsBookmarked: async (email, postId) => {
    return await axios.get(SERVER + `/bookmark/isBookmarking`, {
      params: { email: email, postId: postId },
    });
  },
};

export default PostAPI;
