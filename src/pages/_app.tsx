import Loading from '@/components/common/loading.tsx'
import { Header } from '@/components/header'
import theme from '@/config/theme'
import SnackbarProvider from '@/hook/snackbar-provider'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Kenny bookstore'
        description='Book store'
        openGraph={{
          images: []
        }}
      />
      <RecoilRoot>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Loading />

            <div style={{ backgroundColor: '#F6F9FC' }}>
              <Header />

              <Container maxWidth='lg' sx={{ marginTop: '100px', minHeight: '800px', paddingTop: '2rem' }}>
                <Component {...pageProps} />
              </Container>
            </div>
          </ThemeProvider>
        </SnackbarProvider>
      </RecoilRoot>
    </>
  )
}
