import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Recipes from './pages/Recipes'
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
          <Route path="/recipes/search/:recipeName">
            <Recipes searchMode={true} />
          </Route>
          <Route path="/recipes/:recipeId/edit">
            <RecipeCreate editMode={true} />
          </Route>
          <Route path="/recipes/:recipeId">
            <Recipe />
          </Route>

          <Route path="/recipes">
            <Recipes />
          </Route>
          <Redirect from="/" to="/recipes" />
          <Route component={NotFound} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  )
}
