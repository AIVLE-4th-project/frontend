import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { getBooks } from "../services/bookApi";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function BookList() {
    const [allBooks, setAllBooks] = useState([]); // 전체 목록 저장
    const [books, setBooks] = useState([]);       // 필터링된 목록
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 관련
    const itemsPerPage = 6; // 현재 페이지에 표시되는 카드 수 6개

    // 도서 목록 불러오기 - 최초 1회 (searchTerm 기준)
    useEffect(() => {
        const fetchBooks = async () => {
        const allBooks = await getBooks();
        const filteredBooks = allBooks.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setAllBooks(filteredBooks);

        // 페이지 초기화
        setCurrentPage(1);

        };

        fetchBooks();
    }, [searchTerm]);

    // 현재 페이지 도서 추출
    const pagedBooks = allBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

    // 전체 페이지
    const totalPages = Math.ceil(allBooks.length / itemsPerPage);

    return (
        <div style={{ padding: "2rem" }}>
        <h2>📚 도서 목록</h2>

        {/* 검색창 */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* 도서 카드 리스트 */}
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "1rem",
        }}
        >
            {pagedBooks.map((book) => (
            <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                coverUrl={book.coverUrl}
                date={book.createdAt}
            />
            ))}
        </div>
            <div>
                <button
                onClick={() => navigate("/register")}
                style={{ marginTop: "2rem", padding: "1rem", fontSize: "1rem" }}
                >
                ➕ 도서 등록
                </button>
            </div>

            {/* 페이지네이션 */}
            <div
            style={{
                marginTop: "2rem",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
            }}
            >
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: currentPage === i + 1 ? "#1976d2" : "#e0e0e0",
                    color: currentPage === i + 1 ? "white" : "black",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
                >
                {i + 1}
                </button>
            ))}
            </div>

        </div>
    );
}

export default BookList;