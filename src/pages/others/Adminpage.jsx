import {useEffect, useState} from "react";
import {
  AdminProfileBox,
  AdminBox,
  ReportUser,
  Modal,
  ModalContent,
} from "../../styles/AdminStyled";
import ReportAPI from "../../api/ReportAPI";
import {ProfileImgDownloader} from "../../components/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

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


  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose); // Cleanup on unmount
    };
  }, [modalOpen]);

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

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReport(null); // 선택된 report 정보도 초기화 (선택적)
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
                <ProfileImgDownloader
                    imgfile={report.reportedProfileImg}
                    width="60px"
                    height="60px"
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
                <button
                  className={`check ${report.reportState}`} // 동적 클래스 추가
                  onClick={() => handleCheck(report)}
                  disabled={report.reportState !== "wait"}
                >
                  {/* 버튼 텍스트도 상태에 따라 변경 */}
                  {report.reportState === "wait" && "대기"}
                  {report.reportState === "deny" && "거부됨"}
                  {report.reportState === "accept" && "승인됨"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </ReportUser>

      {modalOpen && selectedReport && (
        <Modal>
          <ModalContent>
            <button className="close-modal" onClick={closeModal}
                    style={{position: "absolute", top: "10px", right: "10px"}}>
              X
            </button>
            <div className="modalHeader">
            <div className="reporter">
                <h5>신고자</h5>
              <div className="count">
                신고한 횟수 : {selectedReport.reporterCount}
              </div>
                <ProfileImgDownloader
                    imgfile={selectedReport.reporterProfileImg}
                    width="60px"
                    height="60px"
                />
                <span>{selectedReport.reporterEmail}</span>
              </div>
              <FontAwesomeIcon className="arrow" icon={faArrowRight}/>
              <div className="reported">
                <h5>피신고자</h5>
                <div className="count">
                  신고당한 횟수 : {selectedReport.reportedCount}
                </div>
                <ProfileImgDownloader
                  imgfile={selectedReport.reportedProfileImg}
                  width="60px"
                  height="60px"
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
