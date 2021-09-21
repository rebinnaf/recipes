import { Wrap } from '@chakra-ui/react'
import RecipePreview from '../components/RecipePreview'
import Card from '../components/ui/Card'
import { useQuery } from 'react-apollo'

import { GET_RECIPES_QUERY } from '../utils/queries'

export default function Recipes() {
  const { data, error, loading } = useQuery(GET_RECIPES_QUERY)
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
