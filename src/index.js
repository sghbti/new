import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
const httplink=new HttpLink({uri:"http://localhost:4000/graphql"});

const Client=new ApolloClient({
    link:httplink,
    cache:new InMemoryCache()
});


// ReactDOM.render(<BrowserRouter><ApolloProvider client={Client} > <App /></ApolloProvider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={Client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
