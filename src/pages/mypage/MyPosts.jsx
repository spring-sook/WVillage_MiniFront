import { useNavigate } from "react-router-dom";
import { MyPostContainer, Posts } from "../../styles/MyPostStyled";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserStore";
import PostAPI from "../../api/PostAPI";

export const MyPosts = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostAPI.UserPostList(userInfo.email);
      console.log("response : ", response);
    };
    fetchData();
  }, []);
  return (
    <MyPostContainer>
      <Posts>여기에 게시글 목록</Posts>
    </MyPostContainer>
  );
};
