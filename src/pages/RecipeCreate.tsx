import * as React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Flex, Box, Heading, HStack, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { Forms } from '../utils/types'
import { useMutation, useQuery } from 'react-apollo'
import { CREATE_RECIPE_MUTATION, GET_RECIPE_QUERY, EDIT_RECIPE_MUTATION } from '../utils/queries'

import { useHistory } from 'react-router'

import { InputControl, NumberInputControl, ResetButton } from 'formik-chakra-ui'
import ArrayInputControl from '../components/ui/ArrayInputControl'
import InputControlGroup from '../components/ui/InputControlGroup'
import CollapseCard from '../components/ui/CollapseCard'

const validationSchema = Yup.object({
  name: Yup.string().required(),
  preparationSteps: Yup.array().required().min(2),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        product: Yup.string().required(),
        quantity: Yup.number().required(),
        unit: Yup.string().required(),
      })
    )
    .required()
    .min(2),
  cookingTime: Yup.number().required().min(5),
})

const initialIngredient = { product: '', quantity: 0, unit: 'kg' }

type propsType = {
  editMode?: boolean
}

export default function RecipeCreate({ editMode = false }: propsType) {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION)
  const [editRecipe] = useMutation(EDIT_RECIPE_MUTATION)
  const params: any = useParams()

  const history = useHistory()
  let initialValues: Forms.CreateRecipe = {
    name: '',
    cookingTime: 10,
    preparationSteps: ['nadia'],
    ingredients: [initialIngredient],
  }
  if (editMode) {
    const { data, error, loading } = useQuery(GET_RECIPE_QUERY, {
      variables: { id: params.recipeId },
    })

    if (loading) return <Box></Box>
    if (error) return <Box>{error}</Box>
    delete data.recipe.__typename
    data.recipe.ingredients.forEach((ingredient) => {
      delete ingredient.__typename
    })
    initialValues = data.recipe
  }

  async function handleSubmit(values, actions) {
    console.log({ values, actions })
    actions.setSubmitting(false)

    if (editMode) {
      let editedRecipe = Object.assign(values, { _id: params.recipeId })
      await editRecipe({ variables: { data: editedRecipe } })
      history.push(`/recipes/${params.recipeId}`)
    } else {
      await createRecipe({ variables: { data: values } })
      history.push('/')
    }
  }

  return (
    <Box align="center" justify="center">
      <Box width={['100%', '100%', '100%', '50%']} align="center" justify="center" borderWidth="3px" borderRadius="lg">
        <Heading bg="purple.300" color="white">
          Add New Recipe
        </Heading>
        <Box p="1">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({ values }) => (
              <Form>
                <Flex>
                  <InputControl name="name" label="Name" m="5" />
                  <InputControlGroup right="Min">
                    <NumberInputControl name="cookingTime" label=""></NumberInputControl>
                  </InputControlGroup>
                </Flex>
                <CollapseCard title="Preparation Steps">
                  <ArrayInputControl
                    name="preparationSteps"
                    label="Preparation Steps"
                    inputRows={values.preparationSteps}
                    defaultRow={''}
                  />
                </CollapseCard>
                <CollapseCard title="Ingredients" my="5">
                  <ArrayInputControl
                    name="ingredients"
                    label="ingredients"
                    inputRows={values.ingredients}
                    defaultRow={initialIngredient}
                  />
                </CollapseCard>
                <HStack spacing="10px">
                  <Button type="submit" flex="1" colorScheme="purple" bg="purple.900">
                    Submit
                  </Button>
                  <ResetButton flex="1" colorScheme="purple">
                    Reset
                  </ResetButton>
                </HStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  )
}
