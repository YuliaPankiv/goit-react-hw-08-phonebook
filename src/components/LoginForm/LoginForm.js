// import { Button, Form, Label } from 'components/AuthForm/AuthForm.styled';
// import { Container } from 'components/Layout/Layout.styled';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from 'redux/auth/operation';
// import { selectIsLoading } from 'redux/auth/selectors';

// export const LoginForm = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(prevForm => {
//       return { ...prevForm, [name]: value };
//     });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(loginUser(form));
//   };
//   return (
//     <Container>
//       <Form
//         onSubmit={e => {
//           handleSubmit(e);
//         }}
//       >
//         <h3>Sign In</h3>
//         <Label>
//           Email address
//           <input
//             type="text"
//             name="email"
//             value={form.email}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="email"
//             required
//             onChange={e => {
//               handleChange(e);
//             }}
//           />
//         </Label>
//         <Label>
//           Password
//           <input
//             type="text"
//             name="password"
//             value={form.password}
//             title="password"
//             required
//             onChange={e => {
//               handleChange(e);
//             }}
//           />
//         </Label>
//         <Button type="submit">{isLoading ? 'Loading...' : 'Sign In'}</Button>
//       </Form>
//     </Container>
//   );
// };
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { loginUser } from '../../redux/auth/operation';
import { useDispatch } from 'react-redux';
import { Copyright } from 'components/common/Copyright';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log(form);
    debugger;
    dispatch(loginUser(form));
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
