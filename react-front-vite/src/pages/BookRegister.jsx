import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../services/bookApi";
import {
  FormLayout,
  BookFormFields,
  SubmitButton,
  BackFabButton,
} from "../components/Layout";

function BookRegister() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [touched, setTouched] = useState(false);

  const handleRegister = () => {
    setTouched(true);
    if (!title || !author || !content) {
      alert("모든 항목은 필수입니다!");
      return;
    }

    const book = {
      title,
      author,
      content,
      cover_url: coverUrl,
    };

    createBook(book);
    alert("도서가 등록되었습니다!");
    navigate("/");
  };

  return (
    <div style={{ position: "relative" }}>
      <FormLayout title="도서 등록" icon="➕">
        <BookFormFields
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          content={content}
          setContent={setContent}
          touched={touched}
        />
        <SubmitButton onClick={handleRegister} />
      </FormLayout>
      <BackFabButton />
    </div>
  );
}

export default BookRegister;