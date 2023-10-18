import { ContactForm } from 'components/Contact/ContactForm';
import { Contacts } from 'components/Contact/Contacts';
import { Container } from './UserPage.styled';

export const UserPage = () => {
  return (
    <Container>
      <ContactForm />
      <h2>Contact list</h2>
      <Contacts />
    </Container>
  );
};
