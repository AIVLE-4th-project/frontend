import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBook } from "../services/bookApi";

function BookRegister() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [touched, setTouched] = useState(false);

  const handleRegister = () => {
    if (!title || !author || !content) {
      alert("모든 항목은 필수입니다!");
      return;
    }

    const book = {
      "title": title,
      "author": author,
      "content": content,
      "cover_url": coverUrl
    }
    createBook(book)

    // 실제 등록 로직은 나중에 API 연동 시 구현
    alert("도서가 등록되었습니다!");
    navigate("/");
  };

  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ padding: "2rem", maxWidth: 500, margin: "auto" }}>
        <Stack spacing={3} alignItems="center" mb={3}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#1e1e1e",
            }}
          >
            <span style={{ color: "#7b1fa2", fontSize: "1.6rem" }}>➕</span>
            도서 등록
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <TextField
            label="책 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            error={!title && touched}
            helperText={!title && touched ? "제목은 필수 입력 항목입니다." : ""}
            fullWidth
          />
          <TextField
            label="저자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            error={!author && touched}
            helperText={!author && touched ? "저자는 필수 입력 항목입니다." : ""}
            fullWidth
          />
          <TextField
            label="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            multiline
            rows={4}
            error={!content && touched}
            helperText={!content && touched ? "내용은 필수 입력 항목입니다." : ""}
            fullWidth
          />

          {/* 버튼 정렬 개선 */}
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleRegister}>
              도서 등록
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Fab
        color="primary"
        aria-label="back"
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 1000,
        }}
      >
        <ArrowBackIcon />
      </Fab>
    </div>
  );
}

export default BookRegister;
