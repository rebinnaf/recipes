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


export const CREATE_RECIPE_MUTATION = gql`
  mutation ($data: RecipeInsertInput!) {
    insertOneRecipe(data: $data) {
      _id
    }
  }
`
