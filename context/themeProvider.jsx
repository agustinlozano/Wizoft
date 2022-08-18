import { createContext, useState } from 'react'
import LightModeTheme from '../styles/LightModeTheme.jsx'
import DarkModeTheme from '../styles/DarkModeTheme.jsx'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

export const ThemeContext = createContext({ error: 'Not permission' })

const ThemeProvider = ({ children }) => {
  const { isNight } = useThemeSwitcher()
  const [isDarkMode, setIsDarkMode] = useState(isNight)
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
      {isDarkMode ? <DarkModeTheme /> : <LightModeTheme />}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
