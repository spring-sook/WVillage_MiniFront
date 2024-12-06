import {
  MyReserveContainer,
  Reserves,
  ReserveHeader,
} from "../../styles/MyReserveStyled";

export const MyReserve = () => {
  return (
    <MyReserveContainer>
      <Reserves>
        <ReserveHeader>
          <span>다가오는 예약</span>
          <span>|</span>
          <span>지난 예약</span>
          <span>|</span>
          <span>취소된 예약</span>
        </ReserveHeader>
      </Reserves>
    </MyReserveContainer>
  );
};
