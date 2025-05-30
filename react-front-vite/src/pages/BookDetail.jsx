import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyBooks } from "../dummyData";
import { getBookDetail, deleteBook } from "../services/bookApi";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      const data = await getBookDetail(id);
      setBook(data);
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

  if (!book) return <p>📦 도서를 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📖 도서 상세</h2>
      <img src={book.coverUrl} alt="표지 이미지" width="120" />
      <h3>{book.title}</h3>
      <p><strong>저자:</strong> {book.author}</p>
      <p><strong>내용:</strong> {book.content}</p>
      <p><strong>등록일:</strong> {book.createdAt}</p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => navigate(`/edit/${id}`)} style={{ marginRight: "1rem" }}>
          ✏️ 수정
        </button>
        <button onClick={handleDelete}>🗑 삭제</button>
      </div>
    </div>
  );
}

export default BookDetail;
