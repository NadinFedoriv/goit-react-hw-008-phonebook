import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';

import './ContactList.scss';

export function ContactsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const [editingContact, setEditingContact] = useState(null);

  const handleUpdateClick = id => {
    setEditingContact(id);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        toast.error(`Something go wrong :(`)
      ) : (
        <ul className="list">
          {contacts.map(({ id, name, number }) => (
            <li className="item" key={id}>
              <p>
                {name}: {number}
              </p>
              {editingContact === id ? (
                <UpdateContactForm
                  contactId={id}
                  currentName={name}
                  currentNumber={number}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <div className="buttons">
                  <button
                    className="card-button"
                    type="button"
                    onClick={() => handleUpdateClick(id)}
                  >
                    Update
                  </button>
                  <button
                    className="card-button"
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
