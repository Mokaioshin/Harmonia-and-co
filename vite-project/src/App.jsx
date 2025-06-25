import { useState } from 'react';
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Quiz from "./Quiz.jsx";
import NoPage from "./NoPage.jsx";
import './App.css';
import Input from './Input.jsx';
import Cars from './Cars.jsx';
import GeoQuiz from './GeoQuiz.jsx';
import Todo from './Todo.jsx';
import Harmonia from './harmonia.jsx';
import AlbumPage from "./albumPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="input" element={<Input />} />
          <Route path="Cars" element={<Cars />} />
          <Route path="GeoQuiz" element={<GeoQuiz />} />
          <Route path="todo" element={<Todo />} />
          <Route path="harmonia" element={<Harmonia />} />
          <Route path="harmonia/album/:id" element={<AlbumPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
