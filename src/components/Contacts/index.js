import { Container } from '@mui/material';
import { ContactForm } from '../Contacts/ContactForm/ContactForm';
import { ContactList } from '../Contacts/contactList/ContactList';
import Filter from '../Contacts/filter/Filter';

const Contacts = () => {
  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
