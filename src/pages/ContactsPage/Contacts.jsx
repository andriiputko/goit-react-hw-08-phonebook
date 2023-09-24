import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/Form/Form';
import cl from './ContactPage.module.css'

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box   
      bgGradient={[
        'linear(to bottom, #F8F8F8, #E8E8E8)',
        'linear(to top, #E8E8E8, #F8F8F8)',
      ]}
      pb="120px"
      pt="30px"
      className={cl.container}
    >
      <ContactForm />

      <Filter />
    </Box>
  );
};

export default Contacts;