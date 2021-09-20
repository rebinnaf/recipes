import { Wrap } from '@chakra-ui/react'

import RecipePreview from '../components/RecipePreview'
import Card from '../components/ui/Card'

export default function Recipes() {
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
        category="New REcipe"
        buttonContent="Add New Recipe!"
        targetPath="recipes/create"
      ></Card>
    </Wrap>
  )
}
