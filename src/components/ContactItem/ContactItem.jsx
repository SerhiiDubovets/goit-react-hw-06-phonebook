import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/slice';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { Item, NameItem, NumberItem, ButtonItem } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <Item>
      <NameItem>{name}</NameItem>
      <NumberItem>{number}</NumberItem>
      <ButtonItem type="button" onClick={() => onDeleteContact(id)}>
        <DeleteIcon
          width="20px"
          height="20px"
          area-aria-label="delete contact"
        />
      </ButtonItem>
    </Item>
  );
};

export default ContactItem;

ContactItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
