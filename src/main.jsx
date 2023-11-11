import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './styles/styles.css'
import Header from './components/Header.jsx'
import CatPage from './screens/CatPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cat/:id/:name' element={<CatPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
