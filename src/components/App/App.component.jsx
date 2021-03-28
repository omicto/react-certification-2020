import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navigation from '../Navigation/Navigation.component';
import { useYoutube } from '../../providers/gapi';

function App() {
  const { isGapiLoaded } = useYoutube();

  return (
    <BrowserRouter>
      <AuthProvider>
        {isGapiLoaded ? (
          <>
            <Navigation />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
