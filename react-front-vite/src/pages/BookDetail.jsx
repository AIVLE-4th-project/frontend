import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetail, deleteBook } from "../services/bookApi";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography, Button, Grid, Stack, Paper } from "@mui/material";
import { Fab } from '@mui/material';


function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true); // ✅ loading 상태 추가

    useEffect(() => {
        const fetchBookDetail = async () => {
            setLoading(true);  // 로딩 시작
            const data = await getBookDetail(id);
            setBook(data);
            setLoading(false); // 로딩 완료
        };
        
        fetchBookDetail();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
        await deleteBook(id);
        alert("삭제되었습니다.");
        navigate("/");
        }
    };

    if (loading) return <p>🔄 로딩 중...</p>;
    if (!book) return <p>📦 도서를 찾을 수 없습니다.</p>;

    return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 6 }}>
        📖 도서 상세
      </Typography>

      <Grid 
        container 
        spacing={4} 
        alignItems="flex-start" 
        direction={{ xs: "column", md: "row" }}
      >
        {/* 텍스트 영역 */}
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ 
                p: 2, 
                width: 300, 
                height: 400, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
                }}>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle2"><strong>저자:</strong> {book.author}</Typography>
                <Typography variant="subtitle2"><strong>책내용:</strong> </Typography>                
                <Typography variant="body2" sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                    p: 1,
                    mt: 1,
                    overflowY: "auto",
                    maxHeight: 200
                }}>
                    {book.content}
                </Typography>
                <Typography variant="caption" sx={{ mt: "auto" }}>
                    <strong>등록일:</strong> {book.createdAt?.slice(0, 10)}
                </Typography>
                </Paper>
            </Grid>

        {/* 이미지 영역 */}
        <Grid item xs={12} md={6}>
            <Box sx={{ width: 300, height: 400, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
                src={book.coverUrl}
                alt="표지 이미지"
                style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                aspectRatio: "3 / 4"
                }}
            />
            </Box>
        </Grid>
      </Grid>

      {/* 좌측 하단 고정 버튼 */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "absolute",
          bottom: 32,
          left: 32,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/edit/${id}`)}
        >
          ✏️ 수정
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          🗑 삭제
        </Button>
            <Fab
            color="primary"
            aria-label="back"
            onClick={() => navigate("/")}
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
    </Box>
  );
}


export default BookDetail;
