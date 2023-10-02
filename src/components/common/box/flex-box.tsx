import Box from '@mui/material/Box'
import { ReactNode } from 'react'

export const FlexGrowBetween = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {children}
    </Box>
  )
}
export const FlexBox = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}
