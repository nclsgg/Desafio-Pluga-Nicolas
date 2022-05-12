import GlobalStyles from '@/styles/globalStyles'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyles/>
    <Component {...pageProps} />
  </>
  )
}
