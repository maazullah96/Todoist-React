import { useState } from 'react'
import Header from './components/Header'
import { ThemeContext } from './context/themeContext'
import { useContext } from 'react'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div
        className={`my-component ${
          theme === 'dark' ? 'dark-mode' : 'light-mode'
        }`}
      >
        <Header />
      </div>
    </>
  )
}

export default App
