import { Container } from "../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../components/GlobalComponent";
import { User } from "../components/User";
import {
  UserMain,
  PointBox,
  ButtonContainer,
  AccountContainer,
  ChargeBox,
} from "../styles/UserPointStyled";
import { useState } from "react";

const UserPoint = () => {
  const [isCharge, setIsCharge] = useState(true); // true: 충전, false: 환급
  const [balance, setBalance] = useState(1000); // 초기 보유 포인트 (1000원 예시)
  const [amount, setAmount] = useState(""); // 충전/환급할 금액 입력값
  const [accounts, setAccounts] = useState([]); // 추가된 계좌 목록
  const [selectedAccount, setSelectedAccount] = useState(""); // 선택된 계좌
  const [newAccount, setNewAccount] = useState(""); // 새 계좌 입력값

  const handleChargeClick = () => {
    setIsCharge(true);
  };

  const handleRefundClick = () => {
    setIsCharge(false);
  };

  // 충전 기능
  const handleCharge = () => {
    const chargeAmount = parseFloat(amount);
    if (isNaN(chargeAmount) || chargeAmount <= 0) {
      alert("올바른 금액을 입력하세요.");
      return;
    }
    setBalance(balance + chargeAmount); // 충전한 금액만큼 보유 포인트 증가
    setAmount(""); // 입력값 초기화
  };

  // 환급 기능
  const handleRefund = () => {
    const refundAmount = parseFloat(amount);
    if (isNaN(refundAmount) || refundAmount <= 0 || refundAmount > balance) {
      alert("환급할 금액을 정확하게 입력하세요.");
      return;
    }
    setBalance(balance - refundAmount); // 환급한 금액만큼 보유 포인트 차감
    setAmount(""); // 입력값 초기화
  };

  // 계좌 추가 기능
  const handleAddAccount = () => {
    if (newAccount.trim() === "") {
      alert("계좌를 입력하세요.");
      return;
    }
    setAccounts([...accounts, newAccount]);
    setNewAccount(""); // 입력값 초기화
  };

  return (
    <>
      <Container>
        <HeaderCom />
        <UserMain>
          <User />
          <PointBox>
            <div className="select">
              <p>보유 포인트</p>
              <div className="point-display">{balance}원</div>
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
              {isCharge ? (
                // 충전 화면 내용
                <div>
                  <p>충전할 금액을 입력하세요</p>
                  <input
                    type="number"
                    placeholder="충전할 금액"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} // 금액 입력값 업데이트
                  />
                </div>
              ) : (
                // 환급 화면 내용
                <div>
                  <p>환급할 금액을 입력하세요</p>
                  <input
                    type="number"
                    placeholder="환급할 금액"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} // 금액 입력값 업데이트
                  />
                </div>
              )}

              {/* 계좌 선택 */}
              <AccountContainer>
                <label htmlFor="account-select">계좌 선택</label>
                <select
                  id="account-select"
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)} // 선택된 계좌 업데이트
                >
                  <option value="">계좌를 선택하세요</option>
                  {accounts.map((account, index) => (
                    <option key={index} value={account}>
                      {account}
                    </option>
                  ))}
                </select>
                <button onClick={handleAddAccount}>계좌 추가하기</button>

                {selectedAccount && <p>선택된 계좌: {selectedAccount}</p>}
                {accounts.length === 0 && <p>계좌를 추가해 주세요.</p>}
              </AccountContainer>

              <button onClick={isCharge ? handleCharge : handleRefund}>
                {isCharge ? "충전하기" : "환급하기"}
              </button>
            </ChargeBox>
          </PointBox>
        </UserMain>
        <FooterCom />
      </Container>
    </>
  );
};
export default UserPoint;
