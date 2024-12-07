import {
  MyReserveContainer,
  Reserves,
  ReserveHeader,
} from "../../styles/MyReserveStyled";
import { CategorySelect } from "../../components/CategorySelect";
import { PostsContainer } from "../../components/PostListComponent";
import { ReserveItem } from "../../components/PostItemComponent";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const MyReserve = () => {
  const { email } = useParams();
  const [selectState, setSelectState] = useState("all");

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
            <span className="sort-menu" onClick={() => setSelectState("all")}>
              전체
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("accept")}
            >
              다가오는 예약
            </span>
            <span className="line">|</span>
            <span className="sort-menu" onClick={() => setSelectState("wait")}>
              승인대기
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("complete")}
            >
              지난 예약
            </span>
            <span className="line">|</span>
            <span
              className="sort-menu"
              onClick={() => setSelectState("cancel")}
            >
              취소한 예약
            </span>
            <span className="line">|</span>
            <span className="sort-menu" onClick={() => setSelectState("deny")}>
              거절된 예약
            </span>
          </div>
          <CategorySelect email={email} options={option} />
        </ReserveHeader>
        <PostsContainer>
          {selectState === "all" && (
            <>
              <ReserveItem state="wait" />
              <hr />
              <ReserveItem state="accept" />
              <hr />
              <ReserveItem state="deny" />
              <hr />
              <ReserveItem state="complete" />
              <hr />
              <ReserveItem state="cancel" />
            </>
          )}
          {selectState === "accept" && (
            <>
              <ReserveItem state="accept" />
            </>
          )}
          {selectState === "wait" && (
            <>
              <ReserveItem state="wait" />
            </>
          )}
          {selectState === "complete" && (
            <>
              <ReserveItem state="complete" />
            </>
          )}
          {selectState === "cancel" && (
            <>
              <ReserveItem state="cancel" />
            </>
          )}
          {selectState === "deny" && (
            <>
              <ReserveItem state="deny" />
            </>
          )}
        </PostsContainer>
      </Reserves>
    </MyReserveContainer>
  );
};
