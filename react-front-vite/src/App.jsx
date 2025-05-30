import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookRegister from "./pages/BookRegister";
import BookDetail from "./pages/BookDetail";
import BookEdit from "./pages/BookEdit";


function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/books" element={<BookList />} />
      <Route path="/register" element={<BookRegister />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/edit/:id" element={<BookEdit />} /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
