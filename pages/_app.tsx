import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/SideBar'
import { ThemeProvider } from 'styled-components'
import { themes } from '../configs/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider theme={themes}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ThemeProvider>
  </>)
}

export default MyApp
