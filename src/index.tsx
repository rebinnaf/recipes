import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const GITHUB_BASE_URL = 'https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/recipes-slphl/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  credentials: 'include',
  headers: {
    apiKey: `ypy6OoZTy30O7H08D8Ip5tQM6gQXJ0IrZ6PJrLjxhb9CGuSKFRtSQuCE6Z1FmsOW`,
  },
})
const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
