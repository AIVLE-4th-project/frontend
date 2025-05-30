import { useNavigate } from "react-router-dom";

function BookCard({ id, title, coverUrl, date }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <img src={coverUrl} alt={`${title} 표지`} width="80" height="120" />
      <div>
        <h3 style={{ margin: "0" }}>{title}</h3>
        <p style={{ margin: "0.5rem 0 0", color: "#555" }}>등록일: {date}</p>
      </div>
    </div>
  );
}

export default BookCard;
