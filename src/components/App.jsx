import ContactsForm from './ContactsForm/ConstactsForm';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { useContacts } from '../redux/contactSlice';

const App = () => {

  const { contacts, filter, filterContacts } = useContacts();

   const filterHandleInput = e => {
    const { value } = e.target;
    filterContacts(value);
  };

    const filterArry = () => {
    if (contacts.length !== 0) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };
    const filteredContacts = filterArry();
  return (
    <>
      <ContactsForm />
      <Filter value={filter} onChange={filterHandleInput} />
      <ContactsList contacts={filteredContacts} />      
    </>
  );
};

export default App;

