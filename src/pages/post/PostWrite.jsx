import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { PostWriteContainer, PostWriteSelect } from "../../styles/PostStyled";
import { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const PostWrite = () => {
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  return (
    <Container>
      <HeaderCom />
      <PostWriteContainer>
        <PostWriteSelect>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="category-label">카테고리 선택</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
            >
              <MenuItem value="product">product</MenuItem>
              <MenuItem value="part-time">part-time</MenuItem>
              <MenuItem value="place">place</MenuItem>
            </Select>
          </FormControl>
          <input
            className="post-write-price"
            type="number"
            name="price"
            id="price"
            placeholder="가격"
          />
          <span>/</span>
          <FormControl className="post-write-dropbox">
            <InputLabel id="unit-label">시간/일</InputLabel>
            <Select
              labelId="unit-label"
              value={unit}
              onChange={handleUnitChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                시간/일
              </MenuItem>
              <MenuItem value="day">일</MenuItem>
              <MenuItem value="hour">시간</MenuItem>
            </Select>
          </FormControl>
        </PostWriteSelect>
      </PostWriteContainer>
      <FooterCom />
    </Container>
  );
};

export default PostWrite;
