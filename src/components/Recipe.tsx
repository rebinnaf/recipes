import { Box, Image, Heading, ListItem, UnorderedList, Flex, Center, Text, Badge } from '@chakra-ui/react'
import { Recipes } from '../utils/types'
import { TimeIcon } from '@chakra-ui/icons'
import DefaultImage from '../assets/images/DefaultImage.jpg'

export default function Recipe({
  _id,
  name,
  ingredients,
  preparationSteps,
  numberOfServings,
  cookingTime,
  createdAt,
}: Recipes.Recipe) {
  const ingredientsList = ingredients.map((ingredient, index) => (
    <ListItem key={`ingredient-${index}`}>
      <Text ml="1" as="b">
        {ingredient.product}
        <Badge px="3" ml="3" variant="outline" colorScheme="purple" color="purple.900">
          {ingredient.quantity}
          <Text ml="1" as="b">
            {ingredient.unit}
          </Text>
        </Badge>
      </Text>
    </ListItem>
  ))
  const preparationStepsList = preparationSteps.map((preparationStep, index) => (
    <Box borderWidth="3px" borderRadius="lg" key={`ingredient-${index}`}>
      <Center>
        <Badge px="5" variant="outline" colorScheme="purple" color="purple.900">
          Step {index + 1}
        </Badge>
      </Center>
      <Text p="5">{preparationStep}</Text>
    </Box>
  ))
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
          {_id}
        </Heading>
        <Heading size="md" bg="purple.900" color="purple.200">
          <Flex align="center" justify="center">
            <TimeIcon mr="2" />
            {cookingTime} Min
          </Flex>
        </Heading>
        <Box align="left" p="5" pb="0">
          <Flex justify="space-between">
            <Heading size="lg">Ingredients</Heading>
            <Box bg="purple.50" w="50%" borderWidth="3px" borderRadius="lg" p="5">
              <UnorderedList>
                {ingredientsList}
                {ingredientsList}
              </UnorderedList>
            </Box>
          </Flex>

          <Box my="10">
            <Heading size="lg" mb="2">
              Prepation Steps
            </Heading>
            {preparationStepsList}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
