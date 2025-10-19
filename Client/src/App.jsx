import React from 'react'
import './App.css'
import Signup from "./assets/pages/signup"
import Login from "./assets/pages/login"
import Success from './assets/pages/success'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
