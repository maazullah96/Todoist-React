import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodosProvider } from './context/todosContext.jsx'
// import { ThemeProvider } from 'react-bootstrap'
import { ThemeProvider } from './context/themeContext.jsx'
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TodosProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </TodosProvider>
)
