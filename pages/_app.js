import ThemeProvider from '../context/ThemeProvider'
import Header from '../components/layouts/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
