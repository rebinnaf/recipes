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

