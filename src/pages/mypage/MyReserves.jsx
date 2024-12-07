import {
  MyReserveContainer,
  Reserves,
  ReserveHeader,
} from "../../styles/MyReserveStyled";
import { CategorySelect } from "../../components/CategorySelect";
import { PostListContainer } from "../../components/PostListComponent";
import { useParams } from "react-router-dom";

export const MyReserve = () => {
  const { email } = useParams();

  const option = [
    {
      value: "물건",
    },
    {
      value: "장소",
    },
    {
      value: "구인",
    },
  ];

  return (
    <MyReserveContainer>
      <Reserves>
        <ReserveHeader>
          <div>
            <span className="sort-menu">다가오는 예약</span>
            <span className="line">|</span>
            <span className="sort-menu">지난 예약</span>
            <span className="line">|</span>
            <span className="sort-menu">취소된 예약</span>
          </div>
          <CategorySelect email={email} options={option} />
        </ReserveHeader>
      </Reserves>
    </MyReserveContainer>
  );
};
