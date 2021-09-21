import { Heading, Flex, Button, Box, Input, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { GiHotMeal } from 'react-icons/gi'
import { Icon, SearchIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default function Header() {
  const history = useHistory()
  const [searchName, setSearchName] = useState('')
  return (
    <Box align="center">
      <Heading py="2" bg="purple.200" align="center">
        <Flex align="center" justify="space-around">
          <Flex align="center">
            <motion.div
              animate={{ scale: [1, 1.2, 1.2, 1.2, 1], rotate: [0, 0, 30, -30, 0] }}
              transition={{ duration: 2, loop: Infinity, times: [0, 0.2, 0.5, 0.8, 1], repeatDelay: 2 }}
            >
              <Icon as={GiHotMeal} mx="5" mt="-3" />
            </motion.div>
            Let&apos;s Cook!
          </Flex>
        </Flex>
      </Heading>
      <Box bg="purple.50">
        <Button colorScheme="purple" variant="outline" width={['50%', '50%', '50%', '10%']}>
          <Link to="/">All Recipes</Link>
        </Button>
        <Button colorScheme="purple" variant="outline" width={['50%', '50%', '50%', '10%']}>
          <Link to="recipes/create">Create Recipe</Link>
        </Button>
        <Flex width={['100%', '100%', '100%', '20%']}>
          <Input placeholder="Search Recipes by Name" size="sm" onChange={(e) => setSearchName(e.target.value)} />
          <IconButton
            aria-label="Search Recipes"
            colorScheme="purple"
            variant="outline"
            size="sm"
            icon={<SearchIcon />}
            onClick={() => {
              history.push(`/recipes/search/${searchName}`)
            }}
          />
        </Flex>
      </Box>
    </Box>
  )
}
