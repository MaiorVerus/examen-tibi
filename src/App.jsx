
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landing-page"
import PHE from "./pages/phe"
import ENM from "./pages/enm"
import WD from "./pages/wd"



import './css/global-stylesheet.css'

function App() {


  return (

  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/phe" element={<PHE />} />
    <Route path="/enm" element={<ENM />} />
    <Route path="/wd" element={<WD />} />
  </Routes>
  )
}

export default App
