import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

import { AppContext } from 'libs/contextLib';
import Routes from './routes/Routes';
import SignInForm from './components/User/SignInForm';
import ErrorBoundary from 'components/ErrorBoundary';

const App = () => {
  const [lookingForUser, setLookingForUser] = useState(true);
  const [user, setUser] = useState(null);

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLookingForUser(false);
      setUser(user);
      userHasAuthenticated(true);
    });
  }, []);

  if (lookingForUser) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <SignInForm />;
  }

  return isAuthenticated ? (
    <ErrorBoundary>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </ErrorBoundary>
  ) : (
    <Redirect to="/login" />
  );
};

export default App;
