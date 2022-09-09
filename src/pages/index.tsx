import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Footer from '../Components/Footer/Footer'

import Story from '../Components/StoryGrid/Story'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'} alignItems='center'>
      <Story />
      <Footer />
    </Flex>
  )
}

export default Home
