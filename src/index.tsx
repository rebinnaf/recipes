import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const SERVER_BASE_URL = process.env.SERVER_BASE_URL

const getAuthorizationHeader = async () => {
  const res = await fetch(process.env.SERVER_LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: process.env.API_KEY,
    }),
  })

  if (res.ok) {
    const json = await res.json()
    const accessToken = json.access_token
    return `Bearer ${accessToken}`
  }

  return ''
}

const withToken = setContext(async () => {
  const token = await getAuthorizationHeader()
  return { token }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext()
  operation.setContext(() => ({
    headers: {
      Authorization: token,
    },
  }))
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: SERVER_BASE_URL,
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: ApolloLink.from([withToken, authMiddleware.concat(httpLink)]),
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
