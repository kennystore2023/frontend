import { CheckInView } from '@/hook/checkInScreen'
import AppBar from '@mui/material/AppBar'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import { useState } from 'react'
import Image from '../common/image/image2'

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <CheckInView setIsVisible={setIsVisible}>
      <AppBar
        sx={{
          backgroundColor: 'white',
          boxShadow: isVisible ? 'none' : null
        }}
      >
        <Container maxWidth='lg'>
          <Image img='/logo.jpg' width='50px' height='50px' />
        </Container>
      </AppBar>
    </CheckInView>
  )
}
