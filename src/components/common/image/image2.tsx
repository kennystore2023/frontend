import { CardMedia } from '@mui/material'
import React from 'react'

export default function Image({ img, width, height }: { img: string, width: string, height: string }) {
  return (
    <CardMedia
      component='img'
      alt='Product Image' // Update with a meaningful value
      image={img}
      sx={{
        height,
        width,
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  )
}
