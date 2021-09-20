import { Box, Collapse, Button, useDisclosure, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PropsType extends BoxProps {
  title?: string
  children: ReactNode
}
export default function CollapseCard(props: PropsType) {
  const { title = 'Open', children, ...rest } = props
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="auto" {...rest}>
      <Button className="block" w="100%" onClick={onToggle}>
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="3">{children}</Box>
      </Collapse>
    </Box>
  )
}
