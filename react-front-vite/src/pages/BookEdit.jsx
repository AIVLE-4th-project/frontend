import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyBooks } from "../dummyData";

function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const found = dummyBooks.find((b) => b.id === Number(id));
    if (found) {
      setBook(found);
      setTitle(found.title);
      setAuthor(found.author);
      setContent(found.content);
    }
  }, [id]);

  const handleUpdate = () => {
    alert("수정 완료! (실제로는 업데이트 안됨)");
    navigate(`/books/${id}`);
  };

  if (!book) return <p>책 정보를 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>✏️ 도서 수정</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="책 제목"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="저자"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
          rows={5}
        />
        <button onClick={handleUpdate}>✅ 수정 완료</button>
      </div>
    </div>
  );
}

export default BookEdit;
