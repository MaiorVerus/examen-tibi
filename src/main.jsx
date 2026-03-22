import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ← import up here with the rest
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/examen-tibi/'>   {/* ← wraps App, inside StrictMode */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
