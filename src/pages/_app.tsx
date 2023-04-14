import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']})
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container> 
  )
}
