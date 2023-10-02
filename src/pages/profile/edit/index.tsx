import { UserLayout } from '@/components/layout/user-layout'
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
import { FlexBox, FlexGrowBetween } from '@/components/common/box/flex-box'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { getUser } from '../../../../package/get-user'

export default function Edit() {
  const info = getUser()
  const initialValues = {
    name: info.name,
    email: info.email,
    phone: info.phone,
    address: info.address
  }
  const handleFormSubmit = (data: typeof initialValues) => {
    console.log(data)
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schema
  })
  return (
    <UserLayout>
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FlexGrowBetween>
              <FlexBox>
                <Person2Icon color='primary' />
                <Typography marginLeft={1} variant='h5' fontWeight={700}>
                  Sửa thông tin
                </Typography>
              </FlexBox>
              <FlexBox>
                <Link href={'/profile'}>
                  <Button variant='outlined'>Quay về</Button>
                </Link>
              </FlexBox>
            </FlexGrowBetween>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ padding: '1rem' }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <FlexGrowBetween>
                    <TextField
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      label='Họ và tên'
                      fullWidth
                      size='small'
                    />
                    <TextField
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      label='Email'
                      fullWidth
                      size='small'
                    />
                    <TextField
                      name='phone'
                      value={values.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      label='Số điện thoại'
                      fullWidth
                      size='small'
                    />
                  </FlexGrowBetween>
                  <TextField
                    name='address'
                    value={values.address}
                    onChange={handleChange}
                    error={!!errors.address}
                    helperText={errors.address}
                    label='Địa chỉ'
                    fullWidth
                    size='small'
                  />
                  <Button
                    variant='contained'
                    size='small'
                    type='submit'
                    sx={{
                      width: 150,
                      color: 'white'
                    }}
                  >
                    Lưu
                  </Button>
                </Stack>
              </form>
            </Card>
          </Grid>
        </Grid>
      </>
    </UserLayout>
  )
}
const schema = yup.object().shape({
  email: yup.string().email().required('Bắt buộc'),
  name: yup.string().required('Bắt buộc'),
  phone: yup.string().required('Bắt buộc'),
  address: yup.string().required('Bắt buộc')
})

