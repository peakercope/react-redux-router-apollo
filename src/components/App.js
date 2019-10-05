import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import client from '../apollo';
import store from '../store';
import Welcome from "./Welcome";

const App = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={Welcome} />
              </Switch>
          </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export default App;
