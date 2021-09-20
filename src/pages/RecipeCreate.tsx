import * as React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Flex, Box, Heading, HStack } from '@chakra-ui/react'
import { Forms } from '../utils/types'

import { InputControl, NumberInputControl, ResetButton, SubmitButton } from 'formik-chakra-ui'
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
            onSubmit={(values, actions) => {
              console.log({ values, actions })
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }}
            validationSchema={validationSchema}
          >
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
                  <SubmitButton flex="1" colorScheme="purple" bg="purple.900">
                    Submit
                  </SubmitButton>
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
