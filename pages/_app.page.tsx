
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'
import NavigationContainer from '@dmd/navigation-container'

import '../styles/globals.css'
import { themes } from '../src/configs/themes'

/**
 * MyApp
 * @param {AppProps} props app props
 * @returns {ReactElement} MyApp
 */
function MyApp({ Component, pageProps }: AppProps): ReactElement {
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
