import {
  Button,
  Form,
  Label,
} from 'components/AuthNav/AuthForm/AuthForm.styled';
import { Container } from 'components/Layout/Layout.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from 'redux/auth/operation';
import { selectIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  console.log(form);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(form));
  };
  return (<Container>    <Form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <Label>
        Email address
        <input
          type="text"
          name="email"
          value={form.email}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="email"
          required
          onChange={e => {
            handleChange(e);
          }}
        />
      </Label>
      <Label>
        Password{' '}
        <input
          type="text"
          name="password"
          value={form.password}
          title="password"
          required
          onChange={e => {
            handleChange(e);
          }}
        />
      </Label>
      <Button type="submit">{isLoading ? 'Loading...' : 'Sign In'}</Button>
    </Form>
</Container>
  );
};
