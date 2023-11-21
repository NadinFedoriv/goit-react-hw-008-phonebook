import './Contacts.scss';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectContacts} from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts-container">
      <h2>Phonebook</h2>
      <ContactForm />
      <div>{isLoading && <Loader />}</div>
      <h2>Contacts</h2>
      {contacts.length ? (
        <>         
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>
          You don't have any contacts. Add contacts to appear here.
        </p>
      )}
    </div>
  );
}


