import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import LockIcon from '@mui/icons-material/Lock'
import { useFormik } from 'formik'
import * as yup from 'yup'
export default function SignUp() {
  const handleFormSubmit = (data: typeof initialValues) => {
    console.log(data)
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schema
  })
  return (
    <Dialog open={true} maxWidth='sm' fullWidth>
      <DialogTitle textAlign={'center'}>Đăng ký</DialogTitle>
      <DialogContent
        sx={{
          paddingTop: '0.5rem !important'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                label='Họ'
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                label='Tên'
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                label='Email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailIcon />
                    </InputAdornment>
                  )
                }}
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='phone'
                value={values.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                label='Điện thoại'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PhoneIcon />
                    </InputAdornment>
                  )
                }}
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='address'
                value={values.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
                label='Địa chỉ'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <HomeIcon />
                    </InputAdornment>
                  )
                }}
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                label='Mật khẩu'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
                type='password'
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='passwordConfirm'
                value={values.passwordConfirm}
                onChange={handleChange}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm}
                label='Xác nhận mật khẩu'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
                type='password'
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth sx={{ color: 'white' }}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}
const schema = yup.object().shape({
  email: yup.string().email().required('Bắt buộc'),
  firstName: yup.string().required('Bắt buộc'),
  lastName: yup.string().required('Bắt buộc'),
  phone: yup.string().required('Bắt buộc'),
  address: yup.string().required('Bắt buộc'),
  password: yup.string().required('Bắt buộc'),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Mật khẩu chưa khớp')
})
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  passwordConfirm: ''
}
