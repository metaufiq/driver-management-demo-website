
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import { themes } from '../configs/themes'
import NavigationContainer from '../components/NavigationContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <Component {...pageProps} />
      </NavigationContainer>
    </ThemeProvider>
  </>)
}

export default MyApp
