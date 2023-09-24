
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/contactSelectors';
import { Box } from '@chakra-ui/react';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

 export const Contacts = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = contact => {
    dispatch(deleteContact(contact.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Box
      maxW="400px"
      mt={1}
      height="auto"
      borderRadius="5px"
      boxShadow="dark-lg"
      p="2"
      
    >
      <List>
        {visibilityContacts.map(contact => (
          <ListItem key={contact.id}>
            <ListIcon as={MdSettings} color="green" />
            {contact.name}: <span>{contact.number}</span>
            <Button
              colorScheme="yellow"
              variant="ghost"
              onClick={() => handleDelete(contact)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Contacts;
