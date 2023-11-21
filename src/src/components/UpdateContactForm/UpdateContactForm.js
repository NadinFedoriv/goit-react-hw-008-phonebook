import './UpdateContactForm.scss';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { useState } from 'react';

const UpdateContactForm = ({
  contactId,
  currentName,
  currentNumber,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(currentName);
  const [number, setNumber] = useState(currentNumber);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ id: contactId, data: { name, number } }));
    setName('');
    setNumber('');
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input
          className="input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="label">
        Number:
        <input
          className="input"
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <div className="buttons">
        <button className="card-button" type="submit">
          Save
        </button>
        <button className="card-button" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateContactForm;
