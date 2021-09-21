import { Wrap } from '@chakra-ui/react'
import RecipePreview from '../components/RecipePreview'
import Card from '../components/ui/Card'
import { useQuery } from 'react-apollo'
import { useParams } from 'react-router-dom'

import { GET_RECIPES_QUERY, SEARCH_RECIPE_QUERY } from '../utils/queries'

type propsType = {
  searchMode?: boolean
}
export default function Recipes({ searchMode = false }: propsType) {
  const params: any = useParams()

  const query = searchMode ? SEARCH_RECIPE_QUERY : GET_RECIPES_QUERY
  const variables = searchMode ? { name: params.recipeName } : {}
  const { data, error, loading } = useQuery(query, {
    variables: variables,
    fetchPolicy: 'network-only',
  })
  if (loading) return <div></div>
  if (error) return <div>{error}</div>
  return (
    <Wrap p="5" spacing="30px" justify="center" align="center" overflow="hidden">
      <Card
        title="+"
        subtitle=""
        description="Add new recipe"
        category="New Recipe"
        buttonContent="Add New Recipe!"
        targetPath="/recipes/create"
      ></Card>
      {data &&
        data.recipes &&
        data.recipes.map((recipe, index) => <RecipePreview key={`recipe-${index}`} {...recipe} />)}
    </Wrap>
  )
}
