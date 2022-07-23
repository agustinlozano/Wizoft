import ThemeProvider from './contex/themeProvider'
import './App.css'

function App () {
  return (
    <ThemeProvider>
      <div className='App'>
        <h1>Hello, world!</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
