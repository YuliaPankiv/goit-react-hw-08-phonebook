import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/operation';
import { selectIsLoading } from 'redux/auth/selectors';
import { Button, Form, Label } from './AuthForm.styled';
import { Container } from 'components/Layout/Layout.styled';

export const AuthForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
  return (
    <Container>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Label>
          Username
          <input
            type="text"
            name="name"
            value={form.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Email address{' '}
          <input
            type="text"
            name="email"
            value={form.email}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="email"
            required
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">{isLoading ? 'Loading...' : 'Sign Up'}</Button>
      </Form>
    </Container>
  );
};
