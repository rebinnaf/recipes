import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import RecipesPage from './pages/Recipes'
import RecipeCreate from './pages/RecipeCreate'
import Recipe from './components/Recipe/Recipe'

import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Switch>
          <Route path="/recipes/create">
            <RecipeCreate />
          </Route>
          <Route path="/recipes/:recipeId">
            <Recipe />
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
