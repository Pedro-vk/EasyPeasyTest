import { StoreProvider } from 'easy-peasy'
import type { AppProps } from 'next/app'
import { store } from 'src/shared/store'
import 'src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
