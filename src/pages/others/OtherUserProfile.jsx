import { Container } from "../../styles/GlobalStyled";
import { HeaderCom } from "../../components/GlobalComponent";
import OtherUser from "../../components/OtherUser";
import { useParams, useSearchParams } from "react-router-dom";
import { PostListComponent } from "../../components/PostListComponent";
import styled from "styled-components";

export const UserInfoFrame = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2%;
  overflow: hidden;
  gap: 20px;
  @media(max-width: 747px) {
    flex-direction: column;
  }
`;

const OtherUserProfile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  return (
    <Container>
      <HeaderCom />
      <UserInfoFrame>
        <OtherUser email={email} />
        <PostListComponent email={email} />
      </UserInfoFrame>
    </Container>
  );
};

export default OtherUserProfile;
