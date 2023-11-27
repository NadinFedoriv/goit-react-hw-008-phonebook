import './Contacts.scss';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { useSelector } from 'react-redux';
import { selectVisiableContacts } from 'redux/contacts/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch} from 'react-redux';

export default function Contacts() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisiableContacts);

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

  return (
    <div className="contacts-container">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {visibleContacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>You don't have any contacts. Add contacts to appear here.</p>
      )}
    </div>
  );
}
