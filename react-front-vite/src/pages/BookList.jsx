import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { getBooks } from "../services/bookApi";

function BookList() {
  const [allBooks, setAllBooks] = useState([]); // 전체 목록 저장
  const [books, setBooks] = useState([]);       // 필터링된 목록
  const [searchTerm, setSearchTerm] = useState("");

  // 도서 목록 불러오기 - 최초 1회 (searchTerm 기준)
useEffect(() => {
  const fetchBooks = async () => {
    const allBooks = await getBooks();
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  fetchBooks();
}, [searchTerm]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📚 도서 목록</h2>

      {/* 검색창 */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 도서 카드 리스트 */}
      <div style={{ marginTop: "1rem" }}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            coverUrl={book.coverUrl}
            date={book.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;


// import BookCard from "../components/BookCard";
// import { useNavigate } from "react-router-dom";

// function BookList() {
//   const navigate = useNavigate();

//   const books = [
//     { id: 1, title: "불편한 편의점", coverUrl: "https://via.placeholder.com/100", date: "2025-05-27" },
//     { id: 2, title: "오늘 밤, 세계에서", coverUrl: "https://via.placeholder.com/100", date: "2025-05-27" },
//   ];

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>📚 도서 목록</h2>

//       {books.map((book) => (
//         <BookCard key={book.id} title={book.title} coverUrl={book.coverUrl} date={book.date} />
//       ))}

//       <button
//         onClick={() => navigate("/register")}
//         style={{ marginTop: "2rem", padding: "1rem", fontSize: "1rem" }}
//       >
//         ➕ 도서 등록
//       </button>
//     </div>
//   );
// }


// function BookList() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>📚 도서 목록</h2>
      
//       {/* 검색창 자리 */}
//       <div style={{ marginBottom: '1rem' }}>
//         <input
//           type="text"
//           placeholder="도서명을 입력해주세요"
//           style={{ padding: '0.5rem', width: '250px' }}
//         />
//         <button style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}>
//           검색
//         </button>
//       </div>

//       {/* 도서 리스트 자리 */}
//       <div>
//         {/* BookCard가 여기 반복 출력될 예정 */}
//       </div>

//       {/* 등록 버튼 */}
//       <div style={{ marginTop: '2rem' }}>
//         <button style={{ padding: '0.8rem 1.2rem' }}>➕ 도서 등록</button>
//       </div>
//     </div>
//   );
// }

//export default BookList;