import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system/styleFunctionSx'
import React, { ReactNode } from 'react'

type Props = SxProps & {
  children: ReactNode
}
export const T: React.FC<Props> = ({ children, ...props }) => (
  <Typography
    component='div'
    sx={{
      '::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '5px',
        background: '#888'
      },
      color: 'black',
      ...props
    }}
  >
    {children}
  </Typography>
)
