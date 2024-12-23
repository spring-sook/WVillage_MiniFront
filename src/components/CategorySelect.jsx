import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CategorySelect = ({ options }) => {
  return (
    <SelectContainer>
      <Select
        variant="standard"
        sx={{ m: 0, mr: 4, mb: 2, pl: 2, minWidth: 100 }}
      >
        <MenuItem value="">
          <em>전체</em>
        </MenuItem>
        {options &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
      </Select>
    </SelectContainer>
  );
};
