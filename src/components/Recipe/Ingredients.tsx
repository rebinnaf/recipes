import { Recipes } from '../../utils/types'
import { Flex, ListItem, UnorderedList, Text, Badge, Heading, Box } from '@chakra-ui/react'

export default function Ingredients({ ingredients }: { ingredients: Recipes.Ingredient[] }) {
  return (
    <Flex justify="space-between">
      <Heading size="lg">Ingredients</Heading>
      <Box bg="purple.50" w="50%" borderWidth="3px" borderRadius="lg" p="5">
        <UnorderedList>
          {ingredients.map((ingredient, index) => (
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
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  )
}
