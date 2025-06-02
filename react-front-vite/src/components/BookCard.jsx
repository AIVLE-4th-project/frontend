import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";


function BookCard({ id, title, coverUrl, date, views, author }) {
  const navigate = useNavigate();
  const formattedDate = date ? date.slice(2, 10) : "";

  return (
    <Box
      onClick={() => navigate(`/books/${id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        overflow: "hidden",
        width: "220px",           // ✅ 너비 살짝 줄임
        minWidth: "220px",        // ✅ scroll 영역에서도 유지
        flexShrink: 0,       // ✅ flex 줄어들지 않게 고정
      }}
    >
      <img src={coverUrl} alt={`${title} 표지`} width="80" height="120" />
      <Box sx={{ width: "140px" }}>
        <Typography
          variant="subtitle1"
          noWrap
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" noWrap sx={{ color: "#666" }}>
          저자: {author}
        </Typography>
        <Typography variant="body2" sx={{ color: "#555" }}>
          등록일: {formattedDate}
        </Typography>
        <Typography variant="body2" sx={{ color: "#888" }}>
          조회수: {views ?? 0}
        </Typography>
      </Box>
    </Box>
  );
}

export default BookCard;
