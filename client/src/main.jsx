import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'rgba(20, 20, 35, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#00C853',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF3D3D',
              secondary: '#fff',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
)
