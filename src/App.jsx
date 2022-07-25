import ThemeProvider from './context/themeProvider'
import PageRouters from './routes'
import './App.css'

function App () {
  return (
    <ThemeProvider>
      <div className='App'>
        <PageRouters />
      </div>
    </ThemeProvider>
  )
}

export default App
