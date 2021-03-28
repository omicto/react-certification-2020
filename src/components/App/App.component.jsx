import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Navigation from '../Navigation/Navigation.component';
import { YouTubeApiProvider } from '../../providers/gapi';
import VideoPage from '../../pages/VideoDetails';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <YouTubeApiProvider>
          <Navigation />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/video/:id">
                <VideoPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </YouTubeApiProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
