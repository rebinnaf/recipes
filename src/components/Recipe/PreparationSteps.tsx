import { Box, Heading, Center, Text, Badge } from '@chakra-ui/react'

export default function PreparationSteps({ preparationSteps }: { preparationSteps: string[] }) {
  return (
    <Box my="10">
      <Heading size="lg" mb="2">
        Prepation Steps
      </Heading>
      {preparationSteps.map((preparationStep, index) => (
        <Box borderWidth="3px" borderRadius="lg" key={`ingredient-${index}`}>
          <Center>
            <Badge px="5" variant="outline" colorScheme="purple" color="purple.900">
              Step {index + 1}
            </Badge>
          </Center>
          <Text p="5">{preparationStep}</Text>
        </Box>
      ))}
    </Box>
  )
}
