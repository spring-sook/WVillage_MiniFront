import {useEffect, useState} from "react";
import {
  AdminProfileBox,
  AdminBox,
  ReportUser,
  Modal,
  ModalContent,
} from "../../styles/AdminStyled";
import ReportAPI from "../../api/ReportAPI";

export const Adminpage = () => {
  const [reports, setReports] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const reportData = await ReportAPI.getReportList();
        setReports(reportData);
      } catch (error) {
        console.error("Error in Adminpage:", error);
        setReports([]); // 에러 발생 시 빈 배열 설정 (선택적)
      }
    };

    fetchReports();
  }, []);

  const handleApprove = async (reportId) => {
    await updateReportStatus(reportId, "accept");
  };

  const handleReject = async (reportId) => {
    await updateReportStatus(reportId, "deny");
  };

  const updateReportStatus = async (reportId, reportState) => {
    try {
      const response = await ReportAPI.updateReport({reportId: reportId, reportState: reportState});
      console.log(response.toString());
      if (response) {
        alert("정상적으로 처리되었습니다.")
        setModalOpen(false);
        window.location.reload()
      } else {
        alert("처리 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("신고 상태 변경 중 오류 발생:", error);
      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
        console.error("서버 응답 상태:", error.response.status);
        console.error("서버 응답 헤더:", error.response.headers);
      } else if (error.request) {
        console.error("요청:", error.request);
      } else {
        console.error('요청 설정 중 오류:', error.message);
      }
      alert("신고 상태 변경 중 오류가 발생했습니다.")
    }
  };

  const handleCheck = (report) => {
    setSelectedReport({...report, reportState: modalOpen ? selectedReport.reportState : "accept"});
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
                  <small>nick: {report.reportedNickName}</small>
                </div>
              </div>
              <div className="reportDetails">
                <p className="reason">사유: {report.reportContent}</p>
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
                onClick={() => handleApprove(selectedReport.reportId)}
              >
                승인
              </button>
              <button
                className="reject"
                onClick={() => handleReject(selectedReport.reportId)}
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
