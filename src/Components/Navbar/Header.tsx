import { ButtonGroup, Flex, HStack, Link, Divider } from '@chakra-ui/react'
import React from 'react'

type HeaderProps = {}
const HeaderLinks: Array<{
  name: String
  path: String
  subList?: any
}> = [
  {
    name: 'Human In Space',
    path: '/'
  },
  {
    name: 'Moon to Mars',
    path: '/'
  },
  {
    name: 'Earth',
    path: '/'
  },
  {
    name: 'Space Tech',
    path: '/'
  },
  {
    name: 'Flight',
    path: '/'
  },
  {
    name: 'Solar System And Beyond',
    path: '/'
  },
  {
    name: 'STEM Engagement',
    path: '/'
  },
  {
    name: 'History',
    path: '/'
  },
  {
    name: 'Benefits To You',
    path: '/'
  }
]
const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent='center'
      bg={'gray.600'}
      ml={'5%'}
      mr={'5%'}
    >
      <HStack alignItems={'center'} display={{ lg: 'flex', base: 'none' }}>
        {' '}
        {HeaderLinks.map((val, index) => {
          return (
            <>
              <Link
                key={String(index)}
                href={val.path.toString()}
                marginX='10px !important'
                paddingY={'24px'}
                fontSize={{ xl: '16px', lg: '12px' }}
                color='#BDBDBD'
                _hover={{
                  color: 'white'
                }}
              >
                {val.name}
              </Link>
            </>
          )
        })}
      </HStack>
    </Flex>
  )
}
export default Header
