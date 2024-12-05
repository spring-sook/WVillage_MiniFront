import { Container } from "../styles/GlobalStyled";
import { HeaderCom } from "../components/GlobalComponent";
import { UserMain } from "../styles/UserPointStyled";
import OtherUser from "../components/OtherUser";
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
  const { email } = useParams();
  return (
    <Container>
      <HeaderCom />
      <UserMain>
        <OtherUser email={email} />
      </UserMain>
    </Container>
  );
};

export default OtherUserProfile;
