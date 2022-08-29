
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'

import '../../styles/globals.css'
import { themes } from '../src/configs/themes'
import NavigationContainer from '../src/components/NavigationContainer'

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
