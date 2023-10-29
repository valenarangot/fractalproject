import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> a92c1b07a36cc500b970a3581440732bb7f5bee1
import App from './src/App'
const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======
    <App />
>>>>>>> a92c1b07a36cc500b970a3581440732bb7f5bee1
)
