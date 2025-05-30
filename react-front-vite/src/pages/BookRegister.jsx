import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BookRegister() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleRegister = () => {
    if (!title || !author || !content) {
      alert("모든 항목은 필수입니다!");
      return;
    }

    // 실제 등록 로직은 나중에 API 연동 시 구현
    alert("도서가 등록되었습니다!");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>➕ 도서 등록</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input
          type="text"
          placeholder="책 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="저자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
        />
        <input
          type="text"
          placeholder="커버 이미지 URL (선택)"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />

        <button onClick={handleRegister}>✅ 도서 등록</button>
      </div>
    </div>
  );
}

export default BookRegister;
