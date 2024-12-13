import {
  AdminProfileBox,
  AdminBox,
  ReportUser,
} from "../../styles/AdminStyled";

export const Adminpage = () => {
  const reports = [
    {
      id: 1,
      username: "user01",
      profileImg: "https://via.placeholder.com/50",
      reportDate: "2024-12-12",
      reason: "부적절한 언어 사용",
    },
    {
      id: 2,
      username: "user02",
      profileImg: "https://via.placeholder.com/50",
      reportDate: "2024-12-11",
      reason: "스팸 메시지 전송",
    },
  ];
  const handleApprove = (id) => {
    console.log(`신고 확인: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`신고 거부: ${id}`);
  };
  return (
    <AdminBox>
      <AdminProfileBox>
        <h4>관리자 페이지 입니다.</h4>
        <div className="option">
          <p>신고 유저 관리</p>
        </div>
      </AdminProfileBox>
      <ReportUser>
        <div className="reportList">
          {reports.map((report) => (
            <div className="reportItem" key={report.id}>
              <div className="userProfile">
                <img
                  src={report.profileImg}
                  alt={`${report.username} 프로필`}
                />
                <div className="userInfo">
                  <span>{report.username}</span>
                  <small>ID: {report.id}</small>
                </div>
              </div>
              <div className="reportDetails">
                <p className="reason">사유: {report.reason}</p>
                <p className="date">신고일: {report.reportDate}</p>
              </div>
              <div className="actions">
                <button
                  className="approve"
                  onClick={() => handleApprove(report.id)}
                >
                  확인
                </button>
                <button
                  className="reject"
                  onClick={() => handleReject(report.id)}
                >
                  거부
                </button>
              </div>
            </div>
          ))}
        </div>
      </ReportUser>
    </AdminBox>
  );
};

export default Adminpage;
