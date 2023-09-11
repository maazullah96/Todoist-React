import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext)

  return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeToggle
