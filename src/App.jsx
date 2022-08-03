import ThemeProvider from './context/themeProvider'
import PageRouters from './routes'
import './App.css'
import Header from './components/layouts/Header'

function App () {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        <PageRouters />
      </div>
    </ThemeProvider>
  )
}

export default App
