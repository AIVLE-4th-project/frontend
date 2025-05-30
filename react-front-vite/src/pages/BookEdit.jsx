import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetail, updateBook } from "../services/bookApi";
import { Box, TextField, Button, Typography, Stack, Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from "@mui/material/Fab";

function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const fetchBookDetail = async () => {
      const data = await getBookDetail(id);
      setBook(data)
      setTitle(data.title)
      setAuthor(data.author)
      setContent(data.content)
    };
    fetchBookDetail()
  }, [id]);

  const handleUpdate = () => {
    const book = {
      "id": id,
      "title": title,
      "author": author,
      "content": content
    }
    updateBook(book)
    alert("수정 완료!");
    navigate(`/books/${id}`);
  };

  if (!book) return <p>책 정보를 찾을 수 없습니다.</p>;

  return (
     <Box sx={{ padding: "2rem", maxWidth: 500, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>✏️ 도서 수정</Typography>

      <Paper sx={{ padding: 3 }}>
        <Stack spacing={2}>
          <TextField
            label="책 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            error={!title && touched}
            helperText={!title && touched ? "제목은 필수입니다." : ""}
          />
          <TextField
            label="저자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            error={!author && touched}
            helperText={!author && touched ? "저자는 필수입니다." : ""}
          />
          <TextField
            label="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            multiline
            rows={4}
            error={!content && touched}
            helperText={!content && touched ? "내용은 필수입니다." : ""}
          />
            <TextField
            label="등록일"
            value={book.createdAt?.slice(0, 10)}
            disabled
            />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleUpdate}>
              ✅ 수정 완료
            </Button>
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
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}


export default BookEdit;
