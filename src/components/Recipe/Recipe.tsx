import { Box, Image, Heading, Flex, Center, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Recipes } from '../../utils/types'

import { TimeIcon } from '@chakra-ui/icons'
import DefaultImage from '../../assets/images/DefaultImage.jpg'
import { useQuery } from 'react-apollo'

import { GET_RECIPE_QUERY } from '../../utils/queries'

import Ingredients from './Ingredients'
import PreparationSteps from './PreparationSteps'

export default function Recipe() {
  const params: any = useParams()
  const { data, error, loading } = useQuery(GET_RECIPE_QUERY, {
    variables: { id: params.recipeId },
    fetchPolicy: 'cache-and-network',
  })
  if (loading) return <Box></Box>
  if (error) return <Box>{error}</Box>
  const { name, numberOfServings, ingredients, preparationSteps, cookingTime, createdAt }: Recipes.Recipe = data.recipe

  return (
    <Box align="center">
      <Box
        width={['100%', '100%', '100%', '50%']}
        height="50%"
        align="center"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading size="md" bg="purple.900" color="purple.200">
          <Center>
            <Text as="cite">
              Served {numberOfServings} Times (Created at 1/2020/{createdAt})
            </Text>
          </Center>
        </Heading>
        <Image h="50vh" objectFit="cover" src={DefaultImage} alt="Dan Abramov" />
        <Heading size="2xl" bg="purple.200" color="purple.900">
          {name}
        </Heading>
        <Heading size="md" bg="purple.900" color="purple.200">
          <Flex align="center" justify="center">
            <TimeIcon mr="2" />
            {cookingTime} Min
          </Flex>
        </Heading>
        <Box align="left" p="5" pb="0">
          <Ingredients ingredients={ingredients}></Ingredients>
          <PreparationSteps preparationSteps={preparationSteps} />
        </Box>
      </Box>
    </Box>
  )
}
