import * as React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Flex, Box, Heading, HStack, Button } from '@chakra-ui/react'
import { Forms } from '../utils/types'
import { useMutation } from 'react-apollo'
import { CREATE_RECIPE_MUTATION } from '../utils/queries'

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

export default function RecipeCreate() {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION)

  const initialValues: Forms.CreateRecipe = {
    name: '',
    cookingTime: 10,
    preparationSteps: ['nadia'],
    ingredients: [initialIngredient],
  }
  return (
    <Box align="center" justify="center">
      <Box width={['100%', '100%', '100%', '50%']} align="center" justify="center" borderWidth="3px" borderRadius="lg">
        <Heading bg="purple.300" color="white">
          Add New Recipe
        </Heading>
        <Box p="1">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
              console.log({ values, actions })
              await createRecipe({ variables: { data: values } })
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }}
            validationSchema={validationSchema}
          >
            {({ values }) => (
              <Form>
                ${JSON.stringify(values)}
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
