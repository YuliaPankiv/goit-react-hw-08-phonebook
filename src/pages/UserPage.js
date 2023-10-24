import { ContactForm } from 'components/Contact/ContactForm/ContactForm';
import { Contacts } from 'components/Contact/ContactList/Contacts';
import { Container } from './UserPage.styled';
import { Filter } from 'components/Contact/Filter/Filter';
//sfc
export const UserPage = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <h2>Contacts list</h2>
      <Contacts />
    </Container>
  );
};
