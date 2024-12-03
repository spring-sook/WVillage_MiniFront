import { Container } from "../../styles/GlobalStyled";
import { HeaderCom, FooterCom } from "../../components/GlobalComponent";
import { PostWriteContainer, PostWriteSelect } from "../../styles/PostStyled";
import { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";

const PostWrite = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  return (
    <Container>
      <HeaderCom />
      <PostWriteContainer>
        <PostWriteSelect>
          <FormControl
            className="post-write-category"
            variant="standard"
            sx={{ minWidth: 180 }}
          >
            <InputLabel id="category-label">카테고리 선택</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
            >
              <MenuItem value="product">물품대여</MenuItem>
              <MenuItem value="part-time">아르바이트</MenuItem>
              <MenuItem value="place">장소대여</MenuItem>
            </Select>
          </FormControl>
          <div className="post-write-price">
            <TextField
              className="post-write-price-textfield"
              type="number"
              variant="standard"
              value={price}
              onChange={handlePriceChange}
              sx={{ width: 150 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">￦</InputAdornment>
                ), // 앞에 ￦ 추가
              }}
            />
            <span>/</span>
            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <InputLabel id="unit-label">시간/일</InputLabel>
              <Select
                labelId="unit-label"
                value={unit}
                onChange={handleUnitChange}
                displayEmpty
              >
                <MenuItem value="day">일</MenuItem>
                <MenuItem value="hour">시간</MenuItem>
              </Select>
            </FormControl>
          </div>
        </PostWriteSelect>
      </PostWriteContainer>
      <FooterCom />
    </Container>
  );
};

export default PostWrite;
