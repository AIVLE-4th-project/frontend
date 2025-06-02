import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { getBooks } from "../services/bookApi";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // 최신순 정렬
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
        <Container 
            maxWidth="lg" 
            sx={{ 
                padding: "2rem",
                minHeight: "700px", 
                minWidth: "960px",       // 🔥 전체 화면 높이만큼 최소 높이 설정
                display: "flex",
                flexDirection: "column",
                //justifyContent: "space-between" // (선택) 콘텐츠를 위-아래로 균형 있게 배치
            }}
            >
            <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                fontWeight: "bold",
                display: "inline-block",
                padding: "0.5rem 1.5rem",
                borderRadius: "1rem",
                background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                color: "white",
                boxShadow: 3,
                }}
            >
            작가의 산책
            </Typography>
            <Divider sx={{ mt: 2 }} />
            </Box>


            {/* 검색창 */}
            <Box style={{ 
                display: "flex", 
                justifyContent: "flex-end", 
                minWidth: "800px"}}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>

        {/* 도서 카드 리스트 */}
        <Box
        sx={{
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
                views={book.views}
            />
            ))}
        </Box>
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => navigate("/register")}
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    zIndex: 1000,
                }}
            >
                <AddIcon />
            </Fab>

            {/* 페이지네이션 */}
        <Stack direction="row" spacing={1} sx={{ mt: 4, justifyContent: "center" }}>
            {Array.from({ length: totalPages }, (_, i) => (
                <Button
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
                </Button>
            ))}
            </Stack>
        </Container>
    );
}

export default BookList;