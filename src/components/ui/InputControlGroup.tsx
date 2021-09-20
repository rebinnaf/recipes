import { Flex, Box, Badge, FormLabel } from '@chakra-ui/react'
import { ReactNode } from 'react'

type propTypes = {
  children: ReactNode
  left?: string
  right?: string
}
export default function InputControlGroup({ left, right, children }: propTypes) {
  return (
    <Box align="center" m="5">
      <FormLabel>Cooking Time</FormLabel>
      <Flex align="center">
        {left && (
          <Badge colorScheme="purple" fontSize="0.8em" p="2">
            {left}
          </Badge>
        )}
        {children}
        {right && (
          <Badge colorScheme="purple" fontSize="0.8em" p="2">
            {right}
          </Badge>
        )}
      </Flex>
    </Box>
  )
}
