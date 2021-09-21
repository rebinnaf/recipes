import gql from 'graphql-tag'

export const GET_RECIPES_QUERY = gql`
  {
    recipes {
      _id
      cookingTime
      createdAt
      name
      numberOfServings
    }
  }
`

export const GET_RECIPE_QUERY = gql`
  query ($id: ObjectId!) {
    recipe(query: { _id: $id }) {
      _id
      cookingTime
      createdAt
      name
      numberOfServings
      preparationSteps
      ingredients {
        product
        quantity
        unit
      }
    }
  }
`

export const CREATE_RECIPE_MUTATION = gql`
  mutation ($data: RecipeInsertInput!) {
    insertOneRecipe(data: $data) {
      _id
    }
  }
`
