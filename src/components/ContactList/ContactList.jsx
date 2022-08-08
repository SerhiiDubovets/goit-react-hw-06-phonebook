import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/Contacts/slice';
import ContactItem from 'components/ContactItem/ContactItem';
import { BlockContact, List, Text } from './ContactList.styled';

const ContactList = () => {
  const filterCont = (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const contact = filterCont(contacts, value);
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <BlockContact>
      <List>
        {contact.length === 0 ? (
          <Text>Contacts not found...</Text>
        ) : (
          contact.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => {
                onDeleteContact(id);
              }}
            ></ContactItem>
          ))
        )}
      </List>
    </BlockContact>
  );
};

export default ContactList;
