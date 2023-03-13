import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { AuthLayout } from '@/components/layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthLayout>
      <Component {...pageProps} />
    // </AuthLayout>
  )
}
