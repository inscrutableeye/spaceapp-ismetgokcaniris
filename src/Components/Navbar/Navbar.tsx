import { Divider, Flex, HStack, Image, Link } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import SearchInput from './SearchInput'

type NavbarProps = {}

const NavbarLinks: Array<{
  name: String
  path: String
  subList?: any
}> = [
  {
    name: 'Mission',
    path: '/'
  },
  {
    name: 'Galleries',
    path: '/'
  },
  {
    name: 'SpaceTV',
    path: '/'
  },
  {
    name: 'Downloads',
    path: '/'
  },
  {
    name: 'About',
    path: '/'
  }
]

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex
        justify={{ md: 'space-between' }}
        backgroundImage={'space.webp'}
        backgroundSize={'cover'}
        height='150px'
        padding={'6px 12px'}
        boxShadow=' inset 10px 10px 10px 89px rgba(0,0,0,0.50)'
      >
        <Image src='space.png' width={'100px'} h={'100px'} />
        <HStack alignItems={'center'} display={{ lg: 'flex', base: 'none' }}>
          {' '}
          {NavbarLinks.map((val, index) => {
            return (
              <>
                <Link
                  position={'relative'}
                  key={String(index)}
                  href={val.path.toString()}
                  marginX='25px !important'
                  paddingY={'24px'}
                  fontSize={{ xl: '16px', lg: '12px' }}
                  color='#BDBDBD'
                  _hover={{
                    color: 'white'
                  }}
                >
                  {val.name}
                </Link>
                <Divider
                  h={'50px'}
                  variant='solid'
                  orientation='vertical'
                  bg={'white'}
                  alignSelf='center'
                />
              </>
            )
          })}
        </HStack>
        <SearchInput />
      </Flex>
      <Header />
    </Flex>
  )
}
export default Navbar
