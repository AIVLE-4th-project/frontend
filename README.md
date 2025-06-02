# 걷기가 서재 - "작가의 산책"

> 🗂️ 이 레포지토리는 프론트엔드 전용 저장소입니다.

## 📌 서비스 소개

**“작가의 산책”**은 누구나 작가가 되어 자유롭게 글을 집필하고 공개할 수 있는 창작 플랫폼입니다.  
이 서비스는 **작가의 감성과 이야기가 그대로 표지에 닿도록 설계된 표지 제작 기능**을 중심으로,  
**기획자에게 가장 가까운 창작자의 시선**을 제공합니다.

## 🛠️ 기술 스택

### 💻 백엔드
- Java
- Spring Boot
- Spring MVC (REST API)
- Spring Data JPA
- Lombok

### 🖥️ 프론트엔드
- JavaScript (ES6+)
- React
- Axios
- React Router
- Material-UI (MUI)

### 🗃️ 데이터베이스
- H2 (개발용)
- MySQL

### 🔗 API
- RESTful API
- OpenAI API (DALLE)
- 
## 🧩 주요 기능
```js
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
    const response = await axios.put(`${BASE_URL}/books`, book); //body로 id포함 정보를 넘겨줌
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
```
- 도서 등록, 목록, 검색, 수정 기능
- AI 이미지 생성 여부를 체크박스로 설정 가능
- 저자 및 제목 기반 검색 기능 제공
- 최신순/인기순 정렬 기능 제공

## ⚙️ 개발 결정 사항

### ✅ API Key 처리
- 사용자가 직접 입력하는 방식은 제외
- 내부 저장소에서 API Key를 사용하여 호출

### ✅ 목록 불러오기
- 목록은 한 번에 불러오는 방식으로 구현 (데이터 적은 환경 고려)

### ✅ 등록 방식
- 등록 버튼 클릭 시 AI 이미지 자동 생성 및 함께 등록

### ✅ 검색 기능 고도화
- 제목뿐만 아니라 저자명으로도 검색 가능

### ✅ 정렬 고도화
- 최신순 / 인기순 기준 정렬 기능 제공

### ✅ 수정 페이지 개선
- 생성된 이미지 변경을 원치 않는 경우를 위해 체크박스를 통해 제어

## 🚧 향후 개선 사항
- 작가 중심의 사용성 개선
- 사용자 피드백 기반 애자일 개선 프로세스 반영


## 👥 팀원 소개

| 이름     | 역할               |
|----------|--------------------|
| 박동근   | PM (Project Manager) |
| 김태현   | Frontend Developer |
| 김해연   | Frontend Developer |
| 배소연   | Frontend Developer |
| 이상엽   | Frontend Developer |
| 김민수   | Backend Developer  |
| 조승빈   | Backend Developer  |


