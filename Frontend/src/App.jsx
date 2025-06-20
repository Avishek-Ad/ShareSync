import React from 'react'
import { LandingPage } from './pages/LandingPage'
import { URLshortnerPage } from './pages/URLshortnerPage'
import TextShareLandingPage from './pages/TextShareLandingPage'
import FileShareLandingPage from './pages/FileShareLandingPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/url" element={<URLshortnerPage />} />
        <Route path="/text" element={<TextShareLandingPage />} />
        <Route path="/file" element={<FileShareLandingPage />} />
      </Routes>
    </>
  )
}

export default App