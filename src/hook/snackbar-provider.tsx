'use client'
import { ErrorSnackbar, NoticeSnackbar, SuccessSnackbar } from '@/components/common/alert'
import { styled } from '@mui/material/styles'
import { SnackbarProvider as NotistackProvider } from 'notistack'
import { forwardRef } from 'react'

// styled component
const Provider = styled(NotistackProvider)(({ theme }) => ({
  '&.SnackbarContent-root.SnackbarItem-contentRoot': {
    boxShadow: theme.shadows[2],
    color: theme.palette.common.black,
    background: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily
  },

  '&.SnackbarItem-variantSuccess .MuiSvgIcon-root': {
    color: theme.palette.success.main
  },
  '&.SnackbarItem-variantError .MuiSvgIcon-root': {
    color: theme.palette.error.main
  }
}))

// ========================================
type Props = { children: any }
// ========================================

const SnackbarProvider = ({ children }: Props) => {
  return (
    <Provider
      maxSnack={4}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      classes={{
        containerRoot: 'z-alert'
      }}
      Components={{
        error: forwardRef((props, ref) => <ErrorSnackbar messageList={props.message.split('-')} ref={ref} />),
        success: forwardRef((props, ref) => <SuccessSnackbar messageList={props.message.split('-')} ref={ref} />),
        warning: forwardRef((props, ref) => <NoticeSnackbar messageList={props.message.split('-')} ref={ref} />)
      }}
    >
      {children}
    </Provider>
  )
}

export default SnackbarProvider
