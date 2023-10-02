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
import { Router, useRouter } from 'next/router'
import { FlexBox, FlexGrowBetween } from '@/components/common/box/flex-box'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { UserLayout } from '@/components/layout/user-layout'
import Link from 'next/link'
import { getUser } from '../../../package/get-user'
export default function Profile() {
  const router = useRouter()
  const info = getUser()
  return (
    <UserLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexGrowBetween>
            <FlexBox>
              <Person2Icon color='primary' />
              <Typography marginLeft={1} variant='h5' fontWeight={700}>
                Thông tin tài khoản
              </Typography>
            </FlexBox>
            <Link href={'/profile/edit'}>
              <Button variant='outlined'>Sửa thông tin</Button>
            </Link>
          </FlexGrowBetween>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ padding: '1rem' }}>
            <FlexBox>
              <Avatar />
              <Typography marginLeft={2} fontWeight={700}>
                {info.name}
              </Typography>
            </FlexBox>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ padding: '1rem' }}>
            <FlexGrowBetween>
              <TextField value={info.name} size='small' variant='standard' label='Ho va Ten' disabled fullWidth />
              <TextField value={info.email} size='small' variant='standard' label='Email' disabled fullWidth />
              <TextField value={info.phone} size='small' variant='standard' label='Điện thoại' disabled fullWidth />
            </FlexGrowBetween>
            <Box marginTop={3}>
              <TextField value={info.address} size='small' label='Địa chỉ' fullWidth />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </UserLayout>
  )
}
