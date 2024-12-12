import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  ParentContainer,
  UnsubscribeContainer,
  Header,
  Title,
  Content,
  ProfileBox,
  Message,
  ButtonContainer,
  CancelButton,
  DeleteButton,
} from "../../styles/UnsubscribeStyled";

const Unsubscribe = () => {
  const navigate = useNavigate();

  const handleUnsubscribe = () => {
    if (window.confirm("정말로 회원탈퇴를 진행하시겠습니까?")) {
      alert("회원탈퇴가 완료되었습니다.");
      navigate("/");
    }
  };

  return (
    <ParentContainer>
      <UnsubscribeContainer>
        <Header>
          <Title>회원탈퇴</Title>
        </Header>
        <Content>
          <ProfileBox>
            <div className="profile-image-container">
              <FontAwesomeIcon icon={faUser} className="placeholder-icon" />
            </div>
          </ProfileBox>

          <Message>
            회원탈퇴를 진행하면 계정 정보와 이용 기록이 모두 삭제됩니다.
            <br />
            복구가 불가능하니 신중히 선택해주세요.
          </Message>
          <ButtonContainer>
            <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
            <DeleteButton onClick={handleUnsubscribe}>회원탈퇴</DeleteButton>
          </ButtonContainer>
        </Content>
      </UnsubscribeContainer>
    </ParentContainer>
  );
};

export default Unsubscribe;
