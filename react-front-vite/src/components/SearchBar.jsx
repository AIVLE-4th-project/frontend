import { TextField, Button } from "@mui/material";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 나중에 실제 검색 버튼 클릭 로직이 있다면 여기에
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}>
      <TextField
        label="도서명을 입력하세요"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        검색
      </Button>
    </form>
  );
}

export default SearchBar;
