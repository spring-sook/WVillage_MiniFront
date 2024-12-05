import {Container} from "../styles/GlobalStyled";
import {HeaderCom} from "../components/GlobalComponent";
import {UserMain} from "../styles/UserPointStyled";
import {User} from "../components/User";

const OtherUserProfile = () =>{

  return(
    <Container>
      <HeaderCom/>
      <UserMain>
        <OtherUser/>
      </UserMain>

    </Container>
  );
}

export default OtherUserProfile;