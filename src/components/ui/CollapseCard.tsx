import { Box, Collapse, Button, useDisclosure } from '@chakra-ui/react'
import { ReactNode } from 'react'

type PropsType = {
  title?: string
  children: ReactNode
}
export default function CollapseCard({ title = 'Open', children }: PropsType) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="auto">
      <Button className="block" w="100%" onClick={onToggle}>
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="3">{children}</Box>
      </Collapse>
    </Box>
  )
}
