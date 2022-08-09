import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact, getContacts } from 'redux/Contacts/slice';
import { ReactComponent as Add } from '../../icons/add.svg';
import { nanoid } from 'nanoid';
import {
  AddForm,
  AddFormLabel,
  AddFormInput,
  AddFormButton,
} from './InputForm.styled';

const nameId = nanoid();
const phoneId = nanoid();

function InputForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const cont = {
      id: nanoid(),
      name,
      number,
    };
    const normalizeName = name.toLowerCase();
    if (contact.find(cont => cont.name.toLowerCase() === normalizeName)) {
      return alert(`${name}, is already in contacts.`);
    }
    dispatch(addContact(cont));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <AddFormLabel htmlFor={nameId}>
        Name
        <AddFormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </AddFormLabel>
      <AddFormLabel htmlFor={phoneId}>
        Phone
        <AddFormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </AddFormLabel>

      <AddFormButton type="submit">
        Add
        <Add widths="40px" height="40px" />
      </AddFormButton>
    </AddForm>
  );
}

export default InputForm;
