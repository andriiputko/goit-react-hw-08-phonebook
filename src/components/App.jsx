import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { refreshUser } from '../redux/auth/operations';
import Home from '../pages/HomePage/Home';
import Layout from './Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/notPagesFound';

const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
