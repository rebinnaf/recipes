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

export const EDIT_RECIPE_MUTATION = gql`
  mutation ($data: RecipeInsertInput!) {
    replaceOneRecipe(data: $data) {
      _id
    }
  }
`

export const DELETE_RECIPE_MUTATION = gql`
  mutation ($id: ObjectId!) {
    deleteOneRecipe(query: { _id: $id }) {
      _id
    }
  }
`

export const SEARCH_RECIPE_QUERY = gql`
  query ($name: String!) {
    recipes(query: { name: $name }) {
      _id
      cookingTime
      createdAt
      name
      numberOfServings
      preparationSteps
    }
  }
`
