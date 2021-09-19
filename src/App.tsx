import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import RecipesPage from './components/Recipes'
import Recipe from './components/Recipe'

import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Switch>
          <Route path="/recipes/create">
            <Recipe
              {...{
                _id: '1',
                name: 'Pasta',
                ingredients: [{ product: 'suger', quantity: 2, unit: 'kg' }],
                preparationSteps: ['nadia1', 'nadia2'],
                numberOfServings: 3,
                cookingTime: 10,
                createdAt: 1,
              }}
            />
          </Route>
          <Route path="/recipes/:recipeId">
            <Recipe
              {...{
                _id: '1',
                name: 'Pasta',
                ingredients: [{ product: 'suger', quantity: 2, unit: 'kg' }],
                preparationSteps: ['nadia1', 'nadia2'],
                numberOfServings: 3,
                cookingTime: 10,
                createdAt: 1,
              }}
            />
          </Route>
          <Route path="/recipes">
            <RecipesPage />
          </Route>
          <Redirect from="/" to="/recipes" />
          <Route component={NotFound} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  )
}
