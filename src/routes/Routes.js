import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CityProvider from 'components/CityProvider/CityProvider';
import LandingPage from 'components/LadingPage';
import cities from '../cities';
import BaseApp from '../BaseApp';

import AuthenticatedRoute from './AuthenticatedRoute';
import NotFound from 'pages/NotFound';

const Routes = () => (
  <Switch>
    <AuthenticatedRoute exact path="/">
      <LandingPage />
    </AuthenticatedRoute>

    {cities.map((city) => (
      <AuthenticatedRoute path={city.cityPath} key={`${city.cityPath}-route`}>
        <CityProvider city={city}>
          <BaseApp />
        </CityProvider>
      </AuthenticatedRoute>
    ))}

    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
