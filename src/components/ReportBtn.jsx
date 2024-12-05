import styled from "styled-components";
import {Button, Typography} from "@mui/material";

const Reporting = styled(Button)`
    && {
    
    }
`;

export const ReportBtn = () => {
  return (
    <Reporting>
      <Typography variant="h6" color={"red"}>신고하기</Typography>
    </Reporting>
  );
}