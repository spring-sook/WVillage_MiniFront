import React from "react";
import { EditProfileContainer, Edit } from "../../styles/EditProfileStyled";

export const EditProfile = () => {
  return (
    <EditProfileContainer>
      <Edit>
        <div
          style={{
            padding: "25px",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* 왼쪽 상단: 이름, 이메일, 주소, 상세 주소 */}
          <div style={{ flex: "1", backgroundColor: "#f0f8ff" }}>
            {" "}
            {/* 디버깅용 배경색 */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                이름
              </label>
              <input
                type="text"
                style={{
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="이름 수정"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                닉네임
              </label>
              <input
                type="text"
                style={{
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="닉네임 수정"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                이메일
              </label>
              <input
                type="email"
                style={{
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="이메일 입력"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                주소
              </label>
              <input
                type="text"
                style={{
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="주소 입력"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                상세 주소
              </label>
              <input
                type="text"
                style={{
                  width: "70%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="상세 주소 입력"
              />
            </div>
          </div>

          {/* 오른쪽 상단: 계좌 입력 섹션 */}
          <div style={{ flex: "1", backgroundColor: "#faf0e6" }}>
            {" "}
            {/* 디버깅용 배경색 */}
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              계좌 정보 확인 및 삭제/추가
            </label>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <span>우리은행 - 123-456-789</span>
              <button
                type="button"
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </div>
            <div style={{ position: "relative", marginTop: "15px" }}>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "10px 50px 10px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="새 계좌 입력"
              />
              <button
                type="button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "5px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                추가
              </button>
            </div>
          </div>
        </div>

        {/* 저장 버튼 */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            저장
          </button>
        </div>
      </Edit>
    </EditProfileContainer>
  );
};
