import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  ParentContainer,
  MenuContainer,
  EditProfileContainer,
  Edit,
  InfoSection,
  BottomButtonContainer,
  ProfileBox,
  Modal,
  DeleteModal,
  EditAccount,
  DeleteButtonContainer,
  DeleteAccountContainer,
  Region,
} from "../../styles/EditProfileStyled";
import { UserContext } from "../../context/UserStore";
import AccountAPI from "../../api/AccountAPI";
import CommonAPI from "../../api/CommonAPI";
import { RegionSelect } from "../../components/RegionSelect";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const EditProfile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeMenu, setActiveMenu] = useState("수정");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showModal, setShowModal] = useState(false); // 모달 열기/닫기
  const [showDeleteModal, setShowDeleteModal] = useState(false); // 계좌 삭제 확인 모달
  const [selectedAccount, setSelectedAccount] = useState(null); // 삭제할 계좌 정보
  const [newAccount, setNewAccount] = useState({ bank: "", accountNumber: "" }); // 새 계좌 정보
  const [accounts, setAccounts] = useState([]);
  const { userInfo } = useContext(UserContext); // UserContext에서 userInfo 가져오기
  const [sidoOpt, setSidoOpt] = useState([]);
  const [sigunguOpt, setSigunguOpt] = useState([]);
  const [emdOpt, setEmdOpt] = useState([]);
  const [riOpt, setRiOpt] = useState([]);
  const [searchArea, setSearchArea] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [regionFilter, setRegionFilter] = useState({
    sido: null,
    sigungu: null,
    emd: null,
    ri: null,
    sidoName: null,
    sigunguName: null,
    emdName: null,
    riName: null,
  });

  useEffect(() => {
    const getSido = async () => {
      const responseSido = await CommonAPI.GetSido();
      setSidoOpt(responseSido.data);
    };
    getSido();
    setPhone(userInfo.phone);
    setPassword(userInfo.password);
  }, []);

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
        } else if (regionFilter.sigungu) {
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
        } else if (regionFilter.sido) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.sido);
          setSigunguOpt(responseRegion.data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();
  }, [regionFilter]);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 계좌 추가하기 버튼 클릭 시 모달 열기
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // 계좌 추가
  const handleAddAccount = async () => {
    if (!newAccount.bank || !newAccount.accountNumber || !userInfo.email) {
      alert("은행과 계좌번호를 모두 입력하세요.");
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

  // 계좌 삭제 버튼 클릭 시 모달 열기
  const handleDeleteClick = (account) => {
    setSelectedAccount(account);
    setShowDeleteModal(true); // 삭제 모달 열기
  };

  const handleDeleteConfirm = async () => {
    if (selectedAccount) {
      const { accountNo, accountBank } = selectedAccount;
      try {
        const response = await axios.delete(
          `http://localhost:8111/account/delete?accountNo=${accountNo}&accountBank=${accountBank}`
        );
        if (response.data) {
          setAccounts(
            accounts.filter(
              (account) =>
                account.accountNo !== accountNo ||
                account.accountBank !== accountBank
            )
          );
          setShowDeleteModal(false); // 삭제 모달 닫기
          alert("계좌가 삭제되었습니다.");
        } else {
          alert("계좌 삭제 실패");
        }
      } catch (error) {
        console.error("계좌 삭제 중 오류 발생:", error);
        alert("계좌 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  // 계좌 삭제 취소
  const handleDeleteCancel = () => {
    setShowDeleteModal(false); // 삭제 모달 닫기
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

  const handleRegionChange = (key) => (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // 선택된 옵션
    const regionNameKey = `${key}Name`; // 예: sido -> sidoName

    setRegionFilter((prevState) => ({
      ...prevState,
      [key]: e.target.value, // 코드 값
      [regionNameKey]: selectedOption.text, // 지역 이름
    }));
  };

  return (
    <ParentContainer>
      <MenuContainer>
        {["수정", "계좌정보"].map((menu) => (
          <button
            key={menu}
            className={activeMenu === menu ? "active" : ""}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </MenuContainer>
      {/*  개인정보 수정 page----------------------------------------------------- */}
      {activeMenu === "수정" && (
        <EditProfileContainer>
          <Edit>
            <InfoSection>
              <div className="form-container">
                <div className="info-item">
                  <label>이메일:</label>
                  <input type="email" value={userInfo.email || ""} disabled />
                </div>

                <div className="info-item">
                  <label>이름:</label>
                  <input
                    type="text"
                    value={userInfo.name || ""}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-item">
                  <label>닉네임:</label>
                  <input
                    type="text"
                    value={userInfo.nickname || ""}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-item">
                  <label>전화번호:</label>
                  <input
                    type="text"
                    value={userInfo.phone || ""}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-item">
                  <label>비밀번호:</label>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={userInfo.password || ""}
                      disabled={!isEditing}
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="toggle-visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>

                <div className="info-item">
                  <label>비밀번호 확인:</label>
                  <div className="password-container">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={userInfo.password || ""}
                      disabled={!isEditing}
                    />
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                      className="toggle-visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  </div>
                </div>
              </div>
            </InfoSection>
            <Region>
              <p>주소: </p>
              {isEditing ? (
                <RegionSelect
                  regionFilter={regionFilter}
                  sidoOpt={sidoOpt}
                  sigunguOpt={sigunguOpt}
                  setSigunguOpt={setSigunguOpt}
                  emdOpt={emdOpt}
                  setEmdOpt={setEmdOpt}
                  riOpt={riOpt}
                  setRiOpt={setRiOpt}
                  setSearchParams={setSearchParams}
                  setRegionFilter={setRegionFilter}
                  handleRegionChange={handleRegionChange}
                  setSearchArea={setSearchArea}
                />
              ) : (
                <span>{userInfo.filteredRegion}</span>
              )}
            </Region>

            <BottomButtonContainer>
              <button onClick={toggleEditing}>
                {isEditing ? "수정 완료" : "수정"}
              </button>
            </BottomButtonContainer>
          </Edit>

          <ProfileBox>
            <div className="profile-image-container">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="프로필"
                  className="profile-image"
                />
              ) : (
                <FontAwesomeIcon icon={faUser} className="placeholder-icon" />
              )}
              <label htmlFor="profile-upload" className="upload-label">
                <FontAwesomeIcon icon={faCamera} />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
          </ProfileBox>
          <DeleteButtonContainer>
            <button onClick={() => setActiveMenu("회원탈퇴")}>회원탈퇴</button>
          </DeleteButtonContainer>
        </EditProfileContainer>
      )}
      {/*  계좌정보 수정 page----------------------------------------------------- */}
      {activeMenu === "계좌정보" && (
        <EditProfileContainer>
          <EditAccount>
            <p>계좌 리스트</p>

            {accounts.map((account, index) => (
              <div key={index} className="account-item">
                <option value={account.accountNo}>
                  {account.accountBank} - {account.accountNo}
                </option>
                <button
                  onClick={() => handleDeleteClick(account)} // 계좌 삭제 클릭 시 모달 띄우기
                >
                  x
                </button>
              </div>
            ))}

            <button onClick={handleOpenModal} className="addaccount">
              계좌 추가하기
            </button>
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
            {showDeleteModal && (
              <DeleteModal>
                <div className="modal-content">
                  <h2>정말로 삭제하시겠습니까?</h2>
                  <div className="button-container">
                    <button onClick={handleDeleteConfirm}>삭제</button>
                    <button onClick={handleDeleteCancel}>취소</button>
                  </div>
                </div>
              </DeleteModal>
            )}
          </EditAccount>
        </EditProfileContainer>
      )}

      {activeMenu === "회원탈퇴" && (
        <EditProfileContainer>
          <DeleteAccountContainer>
            <p>회원탈퇴 안내</p>
            <p className="delete-description">
              회원탈퇴를 진행하시면 모든 정보가 삭제되며 복구가 불가능합니다.
              탈퇴를 원하시면 아래 버튼을 클릭하여 절차를 진행해주세요.
            </p>
            <button
              className="delete-button"
              onClick={() => {
                if (
                  window.confirm(
                    "정말로 회원 탈퇴를 진행하시겠습니까? 탈퇴 후에는 복구할 수 없습니다."
                  )
                ) {
                  alert("회원탈퇴가 완료되었습니다.");
                  // 회원탈퇴 API 호출 로직 추가
                }
              }}
            >
              회원탈퇴
            </button>
          </DeleteAccountContainer>
        </EditProfileContainer>
      )}
    </ParentContainer>
  );
};

export default EditProfile;
