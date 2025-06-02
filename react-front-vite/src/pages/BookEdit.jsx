import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetail, updateBook } from "../services/bookApi";
import { Checkbox, FormControlLabel, Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";

import { 
  FormLayout, 
  BookFormFields,
  BackFabButton 
} from "../components/Layout";

function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [regenerateCover, setRegenerateCover] = useState(false);

  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ loading 상태 추가

  useEffect(() => {
    const fetchBookDetail = async () => {
      setLoading(true);  // 로딩 시작
      const data = await getBookDetail(id);
      setBook(data)
      setTitle(data.title)
      setAuthor(data.author)
      setContent(data.content)
      setLoading(false);  //로딩 완료
    };
    fetchBookDetail()
  }, [id]);

  const handleUpdate = () => {
    const book = {
      "id": id,
      "title": title,
      "author": author,
      "content": content
    }
    updateBook(book)
    alert("수정 완료!");
    navigate(`/books/${id}`);
  };

  if (loading) return <p>🔄 로딩 중...</p>;
  if (!book) return <p>책 정보를 찾을 수 없습니다.</p>;

  return (
    <FormLayout title="도서 수정" icon="✏️">
      <Paper sx={{ padding: 3 }}>
        <BookFormFields
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          content={content}
          setContent={setContent}
          touched={touched}
          showCreatedAt={true}
          createdAt={book.createdAt}
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"   // ✅ 추가: 버튼 수평 중앙 정렬
          mt={2}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={regenerateCover}
                onChange={(e) => setRegenerateCover(e.target.checked)}
              />
            }
            label="표지 재생성"
          />
          <Button variant="contained" onClick={handleUpdate}>
            ✅ 수정 완료
          </Button>
        </Stack>
      </Paper>

      <BackFabButton />
    </FormLayout>
  );
}

export default BookEdit;
