import { Box, Avatar, Badge, Center, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type propsType = {
  image?: string
  title: string
  subtitle?: string
  category?: string
  description?: string
  buttonContent?: string
  targetPath?: string
}
export default function card({
  image,
  title,
  subtitle,
  category,
  description,
  buttonContent = 'Open',
  targetPath = '/',
}: propsType) {
  const [hovered, setHovered] = useState(false)
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
            <div className="flex justify-center items-center absolute w-full h-full bg-indigo-600 bg-opacity-25">
              <motion.div className="h-0" animate={{ height: '100px' }}>
                <Button colorScheme="purple" variant="solid" to={targetPath}>
                  {buttonContent}
                </Button>
              </motion.div>
            </div>
          )}
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
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>

        <Box>{description}</Box>
      </Box>
      <Link to={targetPath} className="absolute inset-0" />
    </Box>
  )
}
