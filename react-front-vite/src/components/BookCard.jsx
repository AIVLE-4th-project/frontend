import { useNavigate } from "react-router-dom";

function BookCard({ id, title, coverUrl, date, views }) {
  const navigate = useNavigate();
  const formattedDate = date ? date.slice(2, 10) : "";

  return (
    <div
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
        width: "250px",
      }}
    >
      <img src={coverUrl} alt={`${title} 표지`} width="80" height="120" />
      <div>
        <h3 style={{ margin: "0" }}>{title}</h3>
        <p style={{ margin: "0.5rem 0 0", color: "#555" }}>등록일: {formattedDate}</p>
        <p style={{ margin: "0", color: "#888" }}>
          👀 조회수: {views ?? 0}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
