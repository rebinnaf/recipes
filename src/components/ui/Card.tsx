import { Box, Avatar, Badge, Center, Button, IconButton, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router'

type propsType = {
  image?: string
  title: string
  subtitle?: string
  category?: string
  description?: string
  buttonContent?: string
  targetPath?: string
  onDelete?: () => void
}
export default function card({
  image,
  title,
  subtitle,
  category,
  description,
  buttonContent = 'Open',
  targetPath = '/',
  onDelete,
}: propsType) {
  const [hovered, setHovered] = useState(false)
  const history = useHistory()

  return (
    <Box
      width={['90%', '50%', '25%', '15%']}
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <Box className="relative">
        <Center mx="12" my="2">
          <Avatar size={image ? 'full' : '2xl'} minH="100px" minW="100px" name={title} src={image} />
          {hovered && (
            <Center className="absolute w-full h-full bg-indigo-600 bg-opacity-25">
              <Box>
                <motion.div className="h-0" animate={{ marginBottom: '60px' }}>
                  <Button colorScheme="purple" variant="solid" to={targetPath}>
                    {buttonContent}
                  </Button>
                </motion.div>
              </Box>
            </Center>
          )}
          <Link to={targetPath} className="absolute inset-0" />
        </Center>
      </Box>
      <Center d="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {category}
        </Badge>
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
          {subtitle}
        </Box>
      </Center>
      <Box mt="2" p="2" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Flex justify="space-between">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Box>
          {onDelete && (
            <Flex>
              <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 0.2, times: [0, 0.5, 1] }}>
                <IconButton
                  size="sm"
                  colorScheme="purple"
                  variant="ghost"
                  aria-label="Delete Recipe"
                  icon={<DeleteIcon />}
                  onClick={onDelete}
                />
              </motion.div>
              <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 0.2, times: [0, 0.5, 1] }}>
                <IconButton
                  size="sm"
                  colorScheme="blue"
                  variant="ghost"
                  aria-label="Edit Recipe database"
                  icon={<EditIcon />}
                  onClick={() => history.push(`/recipes/${targetPath}/edit`)}
                />
              </motion.div>
            </Flex>
          )}
        </Flex>

        <Box>{description}</Box>
      </Box>
    </Box>
  )
}
