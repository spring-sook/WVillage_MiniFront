import styled from "styled-components";

export const AdminBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const AdminProfileBox = styled.div`
  width: 400px;
  height: 750px;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 3px double #1b5e96;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  h4 {
    color: #1b5e96;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
  }

  .option {
    color: #1b5e96;
    height: 80%;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 20px;
      transition: color 0.3s ease, transform 0.3s ease; /* 부드러운 애니메이션 추가 */
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    p:hover {
      cursor: pointer;
      color: #3c8dbc;
      text-decoration: underline;
    }
  }
`;

export const ReportUser = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 80vh;
  margin-right: 20px;
  .reportList {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .reportItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }

  .userProfile {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .userInfo {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        color: #333;
      }

      small {
        font-size: 12px;
        color: #888;
      }
    }
  }

  .reportDetails {
    flex-grow: 1;
    padding-left: 20px;

    .reason {
      font-size: 14px;
      color: #555;
    }

    .date {
      font-size: 12px;
      color: #888;
    }
  }

  .actions {
    display: flex;
    gap: 10px;

    button {
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    .approve {
      background-color: #4caf50;
      color: #fff;
    }

    .reject {
      background-color: #f44336;
      color: #fff;
    }
  }
`;
