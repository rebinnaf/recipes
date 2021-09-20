import { Wrap } from '@chakra-ui/react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import RecipePreview from '../components/RecipePreview'
import Card from '../components/ui/Card'

const GET_RECIPES = gql`
  {
    recipe {
      _id
      cookingTime
      createdAt
      name
      numberOfServings
      preparationSteps
    }
  }
`
export default function Recipes() {
  return (
    <Query query={GET_RECIPES}>
      {({ data }) => {
        return (
          <Wrap spacing="30px" justify="center" align="center" overflow="hidden">
            <RecipePreview
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
            ---{JSON.stringify(data)}---
            <RecipePreview
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
            <RecipePreview
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
            <RecipePreview
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
            <RecipePreview
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
            <Card
              title="+"
              subtitle=""
              description="Add new recipe"
              category="New Recipe"
              buttonContent="Add New Recipe!"
              targetPath="/recipes/create"
            ></Card>
          </Wrap>
        )
      }}
    </Query>
  )
}
