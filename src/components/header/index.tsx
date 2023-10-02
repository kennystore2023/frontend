import { CheckInView } from '@/hook/checkInScreen'
import AppBar from '@mui/material/AppBar'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'
import Image from '../common/image/image2'
import { T } from '../common/typography/text'
import SearchBox from './search'
import Grid from '@mui/material/Grid'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { authorizationState } from '@/atom'
export const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [authorization, setAuthorization] = useRecoilState(authorizationState)
  useEffect(() => {
    const accessToken = localStorage.getItem('Authorization')
    setAuthorization(accessToken !== null ? accessToken : '')
  }, [])
  return (
    <CheckInView setIsVisible={setIsVisible}>
      <AppBar
        sx={{
          backgroundColor: 'white',
          boxShadow: isVisible ? 'none' : null
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={2} height={'90px'} marginTop={1}>
            <Grid item xs={3}>
              <Image img='/logo.jpg' width='50px' height='50px' />
            </Grid>
            <Grid item xs={6}>
              <SearchBox />
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                justifyContent: 'end'
              }}
            >
              <Link href={authorization === '' ? '/signin' : '/profile'}>
                <IconButton sx={{ bgcolor: '#F6F9FC', height: '40px' }}>
                  <PersonIcon />
                </IconButton>
              </Link>
              <IconButton sx={{ bgcolor: '#F6F9FC', height: '40px', marginLeft: '10px' }}>
                <LocalMallIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </CheckInView>
  )
}
