import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export function FormLayout({ title, icon, children }) {
  return (
    <Box sx={{ padding: "2rem", maxWidth: 1000, width: "100%", margin: "auto" }}>
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
          <span style={{ color: "#7b1fa2", fontSize: "1.6rem" }}>{icon}</span>
          {title}
        </Typography>
      </Stack>
      {children}
    </Box>
  );
}

export function BookFormFields({
  title,
  setTitle,
  author,
  setAuthor,
  content,
  setContent,
  touched,
  createdAt,
  showCreatedAt = false, // 추가 필드 표시 여부
}) {
  return (
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
        rows={6}
        error={!content && touched}
        helperText={!content && touched ? "내용은 필수 입력 항목입니다." : ""}
        fullWidth
      />

      {showCreatedAt && (
        <TextField
            label="등록일"
            value={(createdAt ?? "").slice(0, 10)}
            disabled
            fullWidth
        />
        )}
    </Stack>
  );
}

export function DefaultButton({ onClick, label}) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
      <Button variant="contained" color="primary" onClick={onClick}>
        {label}
      </Button>
    </Stack>
  );
}

export function BackFabButton() {
  const navigate = useNavigate();

  return (
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
  );
}