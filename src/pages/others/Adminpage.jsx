import { useState } from "react";
import {
  AdminProfileBox,
  AdminBox,
  ReportUser,
  Modal,
  ModalContent,
} from "../../styles/AdminStyled";

export const Adminpage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 1,
      reporterEmail: "user01@example.com", // 신고자 이메일
      reportedEmail: "user02@example.com", // 피신고자 이메일
      reporterProfileImg: "https://via.placeholder.com/50",
      reportedProfileImg: "https://via.placeholder.com/50",
      reportDate: "2024-12-12",
      reason: "부적절한 언어 사용",
    },
    {
      id: 2,
      reporterEmail: "user03@example.com",
      reportedEmail: "user04@m",
      reporterProfileImg: "https://via.placeholder.com/50",
      reportedProfileImg: "https://via.placeholder.com/50",
      reportDate: "2024-12-11",
      reason: "스팸 메시지 전송",
    },
  ];

  const handleApprove = (email) => {
    console.log(`신고 확인: ${email}`);
    setModalOpen(false);
  };

  const handleReject = (email) => {
    console.log(`신고 거부: ${email}`);
    setModalOpen(false);
  };

  const handleCheck = (report) => {
    setSelectedReport(report);
    setModalOpen(true);
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
                  src={report.reportedProfileImg}
                  alt={`${report.reportedEmail} 프로필`}
                />
                <div className="userInfo">
                  <span>{report.reportedEmail}</span>
                  <small>nick: {report.id}</small>
                </div>
              </div>
              <div className="reportDetails">
                <p className="reason">사유: {report.reason}</p>
                <p className="date">신고일: {report.reportDate}</p>
              </div>
              <div className="actions">
                <button className="check" onClick={() => handleCheck(report)}>
                  확인
                </button>
              </div>
            </div>
          ))}
        </div>
      </ReportUser>

      {modalOpen && selectedReport && (
        <Modal>
          <ModalContent>
            <div className="modalHeader">
              <div className="reporter">
                <h5>신고자</h5>
                <img
                  src={selectedReport.reporterProfileImg}
                  alt={`${selectedReport.reporterEmail} 프로필`}
                />
                <span>{selectedReport.reporterEmail}</span>
              </div>
              <div className="reported">
                <h5>피신고자</h5>
                <img
                  src={selectedReport.reportedProfileImg}
                  alt={`${selectedReport.reportedEmail} 프로필`}
                />
                <span>{selectedReport.reportedEmail}</span>
              </div>
            </div>
            <div className="modalActions">
              <button
                className="approve"
                onClick={() => handleApprove(selectedReport.reportedEmail)}
              >
                승인
              </button>
              <button
                className="reject"
                onClick={() => handleReject(selectedReport.reportedEmail)}
              >
                거절
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </AdminBox>
  );
};

export default Adminpage;
