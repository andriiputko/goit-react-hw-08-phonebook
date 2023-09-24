import { useDispatch } from 'react-redux';
import { setFilterContacts  } from '../../redux/contacts/filterSlice';
import cl from './Filter.module.css';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Contacts } from 'components/Contacts/Contacts';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <Box
      maxW="600px"
      mx="auto"
      mt={1}
      bgGradient={[
        'linear(to-tr, #FFFFFF, #E0E0E0)',
        'linear(to-t, #E0E0E0, #D3D3D3)',
        'linear(to-b, #D3D3D3, #F2F2F2)',
      ]}
      height="auto"
      borderRadius="5px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <label>
        Find contact by the name
        <Input
          type="text"
          name="filter"
          onChange={handlerFilter}
          placeholder="Search Contact"
        />
      </label>
      <Contacts />
    </Box>
  );
};

export default Filter;
