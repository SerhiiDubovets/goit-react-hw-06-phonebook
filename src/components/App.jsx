import { GlobalStyle } from './GlobalStyled';
import { PhonebookTitle, Phonebook, ContactTitle } from './Phonebook.styled';
import InputForm from './InputForm';
import ContactList from './ContactList';
import SearchFilter from './Filter';

export default function App() {
  return (
    <Phonebook>
      <GlobalStyle />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <InputForm />
      <ContactTitle>Contacts</ContactTitle>
      <SearchFilter />
      <ContactList />
    </Phonebook>
  );
}
