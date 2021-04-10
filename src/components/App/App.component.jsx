import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from 'providers/Auth';
import { VideoProvider } from 'providers/video';
import { Layout, Navigation } from 'components';
import { HomePage, LoginPage, NotFoundPage, VideoDetailsPage } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
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
                <VideoDetailsPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Layout>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
