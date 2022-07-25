import ThemeProvider from './context/themeProvider'
import PageRouters from './routes'
import './App.css'

function App () {
  return (
    <ThemeProvider>
      <div className='App'>
        <h1>Hello, world!</h1>
      </div>
      <PageRouters />
    </ThemeProvider>
  )
}

export default App
