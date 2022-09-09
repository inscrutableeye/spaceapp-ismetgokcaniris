import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons'
type SearchInputProps = {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex ml={2} mr={2} align='center'>
      <InputGroup>
        <InputLeftElement color='gray.400' pointerEvents='none'>
          <SearchIcon color={'gray.300'} mb='1' />
        </InputLeftElement>
        <Input
          placeholder='Search'
          fontSize={'10pt'}
          _placeholder={{ color: 'gray.500' }}
          textColor='black'
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderCollapse: 'blue.500'
          }}
          h='34px'
          bg='gray.50'
        />
      </InputGroup>
      <Button ml={'10px'}>
        <Text fontSize={'10px'} paddingX='10px' paddingY={'10px'}>
          Search
        </Text>
      </Button>
    </Flex>
  )
}
export default SearchInput
