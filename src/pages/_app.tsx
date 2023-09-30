import Loading from '@/components/common/loading.tsx'
import { Header } from '@/components/header'
import theme from '@/config/theme'
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
        title='TiemHommie'
        description='Decoration and Gift'
        openGraph={{
          images: []
        }}
      />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Loading />

          <div style={{ backgroundColor: '#F6F9FC' }}>
            <Header />

            <Container maxWidth='lg' sx={{ marginTop: '100px', minHeight: "800px" }}>
              <Component {...pageProps} />
            </Container>
          </div>
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}
