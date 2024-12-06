import { Container } from "../styles/GlobalStyled";
import { HeaderCom } from "../components/GlobalComponent";
import OtherUser from "../components/OtherUser";
import { useParams } from "react-router-dom";
import {UserPostList} from "../components/UserPostList";
import styled from "styled-components";

const UserInfoFrame = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 2%;
    overflow: hidden;
    gap: 20px;
`;

const OtherUserProfile = () => {
  const { email } = useParams();
  return (
    <Container>
      <HeaderCom />
      <UserInfoFrame>
        <OtherUser email={email} />
        <UserPostList email={email}/>
      </UserInfoFrame>
    </Container>
  );
};

export default OtherUserProfile;
