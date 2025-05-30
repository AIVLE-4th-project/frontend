import axios from  'axios';

const BASE_URL = "http://172.30.1.21:8080"; // 백엔드 주소

// 도서 등록
export const createBook = async (book) => {
  return axios.post(`${BASE_URL}/books`, book);
};

// 도서 목록 전체 조회
export const getBooks = async () => {
  return axios.get(`${BASE_URL}/books`);
};

// 도서 목록 상세 조회
export const getBookDetail = async (id) => {
  return axios.get(`${BASE_URL}/books-detail/${id}`);
};

// 도서 수정
export const updateBook = async (id, book) => {
  return axios.put(`${BASE_URL}/books/${id}`, book);
};

// 도서 삭제
export const deleteBook = async (id) => {
  return axios.delete(`${BASE_URL}/books/${id}`);
};

// 표시 이미지 URL 업데이트
export const updateImageUrl = async (bookId, imageUrl) => {
  return axios.post(`${BASE_URL}/books/${bookId}/image`, { imageUrl });
};

