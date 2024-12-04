import { Container } from "../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../components/GlobalComponent";
import { User } from "../components/User";
import {
  UserMain,
  PointBox,
  ButtonContainer,
  AccountContainer,
  ChargeBox,
  ChargeRefundContainer,
  Modal,
} from "../styles/UserPointStyled";
import { useState } from "react";

const UserPoint = () => {
  const [isCharge, setIsCharge] = useState(true);
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  // 모달 관련 상태
  const [showModal, setShowModal] = useState(false); // 모달 열기/닫기
  const [newAccount, setNewAccount] = useState({ bank: "", accountNumber: "" }); // 새 계좌 정보

  const handleChargeClick = () => {
    setIsCharge(true);
    setAccounts([]); // 충전 버튼 클릭 시 계좌 리스트 초기화
    setAmount(""); // 포인트 입력란 초기화
  };

  const handleRefundClick = () => {
    setIsCharge(false);
    setAccounts([]); // 환급 버튼 클릭 시 계좌 리스트 초기화
    setAmount(""); // 포인트 입력란 초기화
  };

  // 충전 기능
  const handleCharge = () => {
    const chargeAmount = parseFloat(amount);
    if (isNaN(chargeAmount) || chargeAmount <= 0) {
      alert("올바른 금액을 입력하세요.");
      return;
    }
    setBalance(balance + chargeAmount);
    setAmount(""); // 금액 초기화
    setSelectedAccount(""); // 계좌 선택 초기화
    setAccounts([]); // 추가된 계좌 리스트 초기화
  };
  // 환급 기능
  const handleRefund = () => {
    const refundAmount = parseFloat(amount);
    if (isNaN(refundAmount) || refundAmount <= 0 || refundAmount > balance) {
      alert("환급할 금액을 정확하게 입력하세요.");
      return;
    }
    setBalance(balance - refundAmount);
    setAmount(""); // 금액 초기화
    setSelectedAccount(""); // 계좌 선택 초기화
    setAccounts([]); // 추가된 계좌 리스트 초기화
  };

  // 계좌 추가하기 버튼 클릭 시 모달 열기
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // 계좌 추가 완료
  const handleAddAccount = () => {
    if (!newAccount.bank || !newAccount.accountNumber) {
      alert("은행과 계좌 번호를 입력하세요.");
      return;
    }
    setAccounts([
      ...accounts,
      `${newAccount.bank} - ${newAccount.accountNumber}`,
    ]);
    setShowModal(false); // 모달 닫기
    setNewAccount({ bank: "", accountNumber: "" }); // 입력값 초기화
  };
  const isChargeDisabled = !amount || !selectedAccount;
  const isRefundDisabled =
    !amount || !selectedAccount || parseFloat(amount) > balance;

  return (
    <>
      <Container>
        <HeaderCom />
        <UserMain>
          <User />
          <PointBox>
            <div className="select">
              <p>보유 포인트</p>
              <div className="point-display">{balance}P</div>
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
                  type="text" // input 타입을 text로 설정
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
                    <option key={index} value={account}>
                      {account}
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
        </UserMain>
        <FooterCom />
      </Container>

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
                const value = e.target.value.replace(/[^0-9]/g, "");
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
export default UserPoint;
