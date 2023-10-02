import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import * as yup from 'yup'

export default function SignIn() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const handleFormSubmit = (data: typeof initialValues) => {
    enqueueSnackbar('Đăng nhập thành công')
    localStorage.setItem('Authorization', '123')
    router.push('/').then(() => {
      router.reload()
    })
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schema
  })
  return (
    <Dialog open={true} maxWidth='xs' fullWidth>
      <DialogTitle textAlign={'center'}>Đăng nhập</DialogTitle>
      <DialogContent
        sx={{
          paddingTop: '0.5rem !important'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                label='Password'
                fullWidth
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth sx={{ color: 'white' }}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href='/signup'>
                <Button variant='outlined' fullWidth sx={{ color: 'black' }}>
                  Don't have an account? Sign up
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}
const schema = yup.object().shape({
  email: yup.string().email().required('Bắt buộc'),
  password: yup.string().required('Bắt buộc')
})
const initialValues = {
  email: '',
  password: ''
}
