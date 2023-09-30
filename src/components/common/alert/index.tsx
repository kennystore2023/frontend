'use client'
import Alert from '@mui/material/Alert'
import { forwardRef } from 'react'
import { T } from '../typography/text'

interface Props {
  messageList: string[]
}
export const ErrorSnackbar = forwardRef((props: Props, ref) => {
  const { messageList } = props
  return (
    <Alert
      // @ts-ignore
      ref={ref}
      sx={{ width: '20rem', bgcolor: '#D32F2F', color: 'white' }}
      severity='error'
      variant='filled'
    >
      <T marginBottom={1} color='white' fontSize='1rem' fontWeight={600}>
        Lỗi
      </T>
      {messageList.map((message, id) => (
        <T color='white' key={id} width={254} overflowWrap={'break-word'} wordWrap={'break-word'}>
          {message}
        </T>
      ))}
    </Alert>
  )
})
export const SuccessSnackbar = forwardRef((props: Props, ref) => {
  const { messageList } = props
  return (
    <Alert
      // @ts-ignore
      ref={ref}
      severity='success'
      variant='filled'
      sx={{
        width: '20rem',
        color: 'white',
        bgcolor: '#2E7D32'
      }}
    >
      <T marginBottom={1} color='white' fontSize='1rem' fontWeight={600}>
        Thành công
      </T>
      {messageList.map((message, id) => (
        <T color='white' key={id} width={254} overflowWrap={'break-word'} wordWrap={'break-word'}>
          {message}
        </T>
      ))}
    </Alert>
    // </Snackbar>
  )
})
export const NoticeSnackbar = forwardRef((props: Props, ref) => {
  const { messageList } = props
  return (
    <Alert
      // @ts-ignore
      ref={ref}
      sx={{ width: '20rem', bgcolor: '#ED6C02', color: 'white' }}
      severity='warning'
      variant='filled'
    >
      <T marginBottom={1} color='white' fontSize='1rem' fontWeight={600}>
        Thông báo
      </T>
      {messageList.map((message, id) => (
        <T color='white' key={id} width={254} overflowWrap={'break-word'} wordWrap={'break-word'}>
          {message}
        </T>
      ))}
    </Alert>
    // </Snackbar>
  )
})
