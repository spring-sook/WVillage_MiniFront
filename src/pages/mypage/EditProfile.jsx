import React, { useState } from "react";
import { EditProfileContainer, Edit } from "../../styles/EditProfileStyled";

export const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false); // 입력창 표시 상태

  const toggleEditing = () => {
    setIsEditing(!isEditing); // 상태 전환
  };

  return (
    <EditProfileContainer>
      <Edit>
        {/* 입력창 섹션 */}
        <div
          style={{
            padding: "25px",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* 왼쪽 상단: 이름, 이메일, 주소, 상세 주소 */}
          <div style={{ flex: "1" }}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                이름
              </label>
              {isEditing ? (
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
              ) : (
                <p>홍길동</p> // 기본 텍스트 표시
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                닉네임
              </label>
              {isEditing ? (
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
              ) : (
                <p>길동이</p> // 기본 텍스트 표시
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                이메일
              </label>
              {isEditing ? (
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
              ) : (
                <p>hong@gmail.com</p> // 기본 텍스트 표시
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                주소
              </label>
              {isEditing ? (
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
              ) : (
                <p>서울특별시 강남구</p> // 기본 텍스트 표시
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                상세 주소
              </label>
              {isEditing ? (
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
              ) : (
                <p>123-456</p> // 기본 텍스트 표시
              )}
            </div>
          </div>

          {/* 오른쪽 상단: 계좌 입력 섹션 */}
          <div style={{ flex: "1", textAlign: "right" }}>
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
              {isEditing && (
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
              )}
            </div>
            {isEditing && (
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
            )}
          </div>
        </div>

        {/* 수정/취소 버튼 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={toggleEditing}
            style={{
              padding: "10px 20px",
              backgroundColor: isEditing ? "#ff4d4d" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isEditing ? "취소" : "수정"}
          </button>
        </div>
      </Edit>
    </EditProfileContainer>
  );
};
