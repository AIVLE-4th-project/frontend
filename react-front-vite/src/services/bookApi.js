import axios from 'axios';

const BASE_URL = "http://172.30.1.67:8080"; // 백엔드 주소

// 도서 등록
export const createBook = async (book) => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, book);
    return response.data;
  } catch (error) {
    console.error("도서 등록 실패:", error);
    return null;
  }
};

// 도서 목록 전체 조회
export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("도서 목록 조회 실패:", error);
    return []; // 기본값으로 빈 배열 반환
  }
};

// 도서 상세 조회
export const getBookDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/books-detail`, {
      params: { id } // ✅ 쿼리 파라미터로 전달
    });
    return response.data;
  } catch (error) {
    console.error(`도서 상세 조회 실패 (ID: ${id}):`, error);
    return null;
  }
};

// 도서 수정
export const updateBook = async (book) => {
  try {
    const response = await axios.put(`${BASE_URL}/books`, book); //body로 id포함 정보를 넘겨줌줌
    return response.data;
  } catch (error) {
    console.error(`도서 수정 실패 (ID: ${id}):`, error);
    return null;
  }
};

// 도서 삭제
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/books`, { data: { id } }); //body로 id를 넘겨줌
    return response.data;
  } catch (error) {
    console.error(`도서 삭제 실패 (ID: ${id}):`, error);
    return null;
  }
};

// 표시 이미지 URL 업데이트
export const updateImageUrl = async (bookId, imageUrl) => {
  try {
    const response = await axios.post(`${BASE_URL}/books/${bookId}/image`, { imageUrl });
    return response.data;
  } catch (error) {
    console.error(`이미지 URL 업데이트 실패 (Book ID: ${bookId}):`, error);
    return null;
  }
};
