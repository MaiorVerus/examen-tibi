
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landing-page"
import PHE from "./pages/phe"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/phe" element={<PHE />} />
    </Routes>
  )
}

export default App
