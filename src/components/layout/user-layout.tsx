import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'
import Person2Icon from '@mui/icons-material/Person2'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Stack from '@mui/material/Stack'
import LogoutIcon from '@mui/icons-material/Logout'
import { useRouter } from 'next/router'
import Link from 'next/link'
export const UserLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('Authorization')
    router.push('/').then(() => {
      router.reload()
    })
  }
  const Item = ({ icon, text, onClick }: { icon: ReactNode; text: string; onClick?: any }) => {
    return (
      <MenuItem disableRipple onClick={onClick}>
        {icon}
        <Typography marginLeft={1}>{text}</Typography>
      </MenuItem>
    )
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ padding: '1rem' }}>
              <Stack spacing={1}>
                <Typography fontSize={10}>DASHBOARD</Typography>
                <Item icon={<ShoppingBagIcon />} text='Đơn hàng' />
                <Typography fontSize={10}>ACCOUNT SETTING</Typography>
                <Link href={'/profile'} style={{ color: 'black', textDecoration: 'none' }}>
                  <Item icon={<Person2Icon />} text='Cá nhân' />
                </Link>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ padding: '1rem' }}>
              <Stack spacing={1}>
                <Item icon={<LogoutIcon />} onClick={logout} text='Đăng xuất' />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  )
}
