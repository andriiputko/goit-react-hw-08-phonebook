import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import cl from '../Layout/Layout.module.css';

import UserMenu from 'components/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box
        bg="yellow.500"
        boxShadow="2xl"
        height="90px"
        py={4}
      >
        <NavLink className={cl.link} to="/">
          <Button colorScheme="purple" variant="outline">
            Home
          </Button>
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={cl.link} to="/contacts">
            <Button colorScheme="purple" variant="outline">
              Contacts
            </Button>
          </NavLink>
        ) : (
          <>
            <NavLink className={cl.link} to="/register">
              <Button colorScheme="purple" variant="outline">
                Register
              </Button>
            </NavLink>
            <NavLink className={cl.link} to="/login">
              <Button colorScheme="purple" variant="outline">
                Log In
              </Button>
            </NavLink>
          </>
        )}
        {}
      </Box>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;