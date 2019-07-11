import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import client from '../apollo';
import store from '../store';

const App = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>

          </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export default App;
