import {
  UserMain,
  PointBox,
  ButtonContainer,
  AccountContainer,
  ChargeBox,
  ChargeRefundContainer,
  Modal,
} from "../../styles/UserPointStyled";
import { useContext, useState, useEffect } from "react";
import AccountAPI from "../../api/AccountAPI";
import { UserContext } from "../../context/UserStore";
import axios from "axios";

export const UserPoint = () => {
  const [isCharge, setIsCharge] = useState(true);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  // 모달 관련 상태
  const [showModal, setShowModal] = useState(false); // 모달 열기/닫기
  const [newAccount, setNewAccount] = useState({ bank: "", accountNumber: "" }); // 새 계좌 정보
  const { userInfo, updateUserPoints } = useContext(UserContext); // UserContext에서 userInfo 가져오기

  // UserStore에서 초기 포인트 설정
  useEffect(() => {
    if (userInfo && userInfo.point !== undefined) {
      setBalance(userInfo.point);
    }
  }, [userInfo]);

  const handleChargeClick = () => {
    setIsCharge(true);
    setAmount(""); // 포인트 입력란 초기화
  };

  const handleRefundClick = () => {
    setIsCharge(false);
    setAmount(""); // 포인트 입력란 초기화
  };

  // 포인트 충전 요청
  const handleCharge = async () => {
    const chargeAmount = parseFloat(amount);
    if (isNaN(chargeAmount) || chargeAmount <= 0) {
      alert("올바른 금액을 입력하세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8111/account/chargePoints", // 요청 URL
        null, // POST 방식이라면 body로 보내야 하므로 null을 보내고 파라미터는 query로 전달
        {
          params: {
            email: userInfo.email, // email 파라미터
            point: chargeAmount, // 충전할 포인트
          },
        }
      );

      if (response.status === 200) {
        alert("충전이 완료되었습니다.");
        updateUserPoints(userInfo.point + chargeAmount); // UserStore 상태 업데이트
        setBalance(userInfo.point + chargeAmount); // balance 즉시 업데이트
        setAmount(""); // 포인트 입력란 초기화
      } else {
        alert("충전에 실패했습니다.");
      }
    } catch (error) {
      console.error("충전 중 오류 발생:", error);
      if (error.response) {
        console.error("서버 응답 오류:", error.response.data);
        alert(`서버 오류: ${error.response.data.message || "알 수 없는 오류"}`);
      } else if (error.request) {
        console.error("요청 오류:", error.request);
        alert("서버에 요청을 보냈으나 응답이 없습니다.");
      } else {
        console.error("기타 오류:", error.message);
        alert(`오류 발생: ${error.message}`);
      }
    }
  };

  // 포인트 환급 요청
  const handleRefund = async () => {
    const refundAmount = parseFloat(amount);
    if (isNaN(refundAmount) || refundAmount <= 0) {
      alert("올바른 금액을 입력하세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8111/account/refundPoints", // 요청 URL
        null, // POST 방식이라면 body로 보내야 하므로 null을 보내고 파라미터는 query로 전달
        {
          params: {
            email: userInfo.email, // email 파라미터
            point: refundAmount, // 환급할 포인트
          },
        }
      );

      if (response.status === 200) {
        alert("환급이 완료되었습니다.");
        updateUserPoints(userInfo.point - refundAmount); // UserStore 상태 업데이트
        setBalance(userInfo.point - refundAmount); // balance 즉시 업데이트
        setAmount(""); // 포인트 입력란 초기화
      } else {
        alert("환급에 실패했습니다.");
      }
    } catch (error) {
      console.error("환급 중 오류 발생:", error);
      if (error.response) {
        console.error("서버 응답 오류:", error.response.data);
        alert(`서버 오류: ${error.response.data.message || "알 수 없는 오류"}`);
      } else if (error.request) {
        console.error("요청 오류:", error.request);
        alert("서버에 요청을 보냈으나 응답이 없습니다.");
      } else {
        console.error("기타 오류:", error.message);
        alert(`오류 발생: ${error.message}`);
      }
    }
  };

  // 계좌 추가하기 버튼 클릭 시 모달 열기
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // 계좌 추가
  const handleAddAccount = async () => {
    if (!newAccount.bank || !newAccount.accountNumber || !userInfo.email) {
      alert("은행, 계좌 번호, 이메일을 모두 입력하세요.");
      return;
    }

    // newAccount에 이메일을 추가
    const updatedAccount = {
      ...newAccount,
      accountEmail: userInfo.email, // 이메일을 newAccount에 할당
    };

    try {
      const success = await AccountAPI.addAccount(
        updatedAccount.accountEmail, // 이메일 포함해서 서버로 전송
        updatedAccount.bank,
        updatedAccount.accountNumber
      );
      if (success) {
        alert("계좌가 추가되었습니다.");

        // 계좌 목록 다시 불러오기
        const response = await axios.get(
          `http://localhost:8111/account/findByEmail?email=${userInfo.email}`
        );
        setAccounts(response.data); // 상태 업데이트

        setShowModal(false); // 모달 닫기
      } else {
        alert("계좌 추가 실패");
      }
    } catch (error) {
      console.error("계좌 추가 중 오류 발생:", error);
      alert("계좌 추가 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    // 로그인된 사용자가 있을 때 계좌 목록 요청
    if (userInfo && userInfo.email) {
      axios
        .get(
          `http://localhost:8111/account/findByEmail?email=${userInfo.email}`
        )
        .then((response) => {
          setAccounts(response.data); // 받은 계좌 목록을 상태에 저장
        })
        .catch((error) => {
          console.error("계좌 목록 조회 실패", error);
        });
    }
  }, [userInfo]); // userInfo가 변경될 때마다 실행

  const isChargeDisabled = !amount || !selectedAccount;
  const isRefundDisabled =
    !amount || !selectedAccount || parseFloat(amount) > balance;

  return (
    <>
      <PointBox>
        <div className="select">
          <p>보유 포인트</p>
          <div className="point-display">{balance} P</div>
          <ButtonContainer>
            <button
              className={isCharge ? "active" : ""}
              onClick={handleChargeClick}
            >
              충전
            </button>
            <button
              className={!isCharge ? "active" : ""}
              onClick={handleRefundClick}
            >
              환급
            </button>
          </ButtonContainer>
        </div>

        <ChargeBox>
          <ChargeRefundContainer>
            <p>
              {isCharge
                ? "충전할 포인트를 입력하세요"
                : "환급할 포인트를 입력하세요"}
            </p>
            <input
              type="text"
              placeholder={isCharge ? "충전할 포인트" : "환급할 포인트"}
              value={amount}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자 외의 문자 제거
                setAmount(value); // 숫자만 상태에 저장
              }}
            />
          </ChargeRefundContainer>

          {/* 계좌 선택 */}
          <AccountContainer>
            <label htmlFor="account-select">계좌 선택</label>
            <select
              id="account-select"
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
            >
              <option value="">계좌를 선택하세요</option>
              {accounts.map((account, index) => (
                <option key={index} value={account.accountNo}>
                  {account.accountBank} - {account.accountNo}
                </option>
              ))}
            </select>
            <button onClick={handleOpenModal}>계좌 추가하기</button>
          </AccountContainer>

          <button
            onClick={isCharge ? handleCharge : handleRefund}
            disabled={isCharge ? isChargeDisabled : isRefundDisabled}
          >
            {isCharge ? "충전하기" : "환급하기"}
          </button>
        </ChargeBox>
      </PointBox>

      {/* 모달 팝업 */}
      {showModal && (
        <Modal>
          <div className="modal-content">
            <h2>계좌 추가</h2>
            <label>은행 선택</label>
            <select
              value={newAccount.bank}
              onChange={(e) =>
                setNewAccount({ ...newAccount, bank: e.target.value })
              }
            >
              <option value="">은행을 선택하세요</option>
              <option value="은행1">은행1</option>
              <option value="은행2">은행2</option>
              <option value="은행3">은행3</option>
            </select>
            <label>계좌 번호</label>
            <input
              type="text"
              placeholder="계좌 번호"
              value={newAccount.accountNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력
                setNewAccount({ ...newAccount, accountNumber: value });
              }}
            />
            <div className="button-container">
              <button onClick={handleAddAccount}>계좌 추가</button>
              <button onClick={() => setShowModal(false)}>취소</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
// export default UserPoint;
