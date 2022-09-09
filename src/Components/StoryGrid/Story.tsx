import {
  Grid,
  GridItem,
  Text,
  Link,
  Image,
  AspectRatio,
  Button
} from '@chakra-ui/react'

import React from 'react'

type StoryProps = {}
const GridData: Array<{
  id: number
  image: any
  title: string
  title2: string | null
  link: string
}> = [
  {
    id: 0,
    image: 'rocket.jpg',
    title: 'Artemis 1: Latest Updated',
    title2: null,
    link: 'https://blogs.nasa.gov/artemis/'
  },
  {
    id: 1,
    image: 'queen.jpg',
    title: 'Queen Elizabeth II Visits Nasa Goddard Space Flight Center In 2007',
    title2: null,
    link:
      'https://www.nasa.gov/image-feature/queen-elizabeth-ii-visits-nasas-goddard-space-flight-center-in-2007/'
  },
  {
    id: 2,
    image: 'queen.jpg',
    title: 'Queen Elizabeth II Visits Nasa Goddard Space Flight Center In 2007',
    title2: null,
    link:
      'https://www.nasa.gov/image-feature/queen-elizabeth-ii-visits-nasas-goddard-space-flight-center-in-2007/'
  },
  {
    id: 3,
    image: 'astronout.png',
    title: 'NASA Taps Axiom Space for First Artemis Moonwalking Spacesuits',
    title2: null,
    link:
      'https://www.nasa.gov/press-release/nasa-taps-axiom-space-for-first-artemis-moonwalking-spacesuits'
  },
  {
    id: 4,
    image: 'astronout.png',
    title: 'NASA Taps Axiom Space for First Artemis Moonwalking Spacesuits',
    title2: null,
    link:
      'https://www.nasa.gov/press-release/nasa-taps-axiom-space-for-first-artemis-moonwalking-spacesuits'
  },
  {
    id: 5,
    image: 'dydmos.jpg',
    title: 'NASA Taps Axiom Space for First Artemis Moonwalking Spacesuits',
    title2: null,
    link:
      'https://www.nasa.gov/press-release/nasa-taps-axiom-space-for-first-artemis-moonwalking-spacesuits'
  }
]
const Story: React.FC<StoryProps> = () => {
  return (
    <Grid
      templateColumns='repeat(4, 1fr)'
      templateRows={'repeat(3, 1fr)'}
      gap={3}
      w={'100%'}
      padding={'100px'}
    >
      <GridItem colSpan={2} rowSpan={2} mt={'-15%'}>
        <AspectRatio ratio={1}>
          <Link href={GridData[0].link} display='flex' flexDirection={'column'}>
            <Image src={GridData[0].image} objectFit='cover' rounded={'3x1'} />
            <Text
              w={'full'}
              opacity={'0.6'}
              bg={'white'}
              textColor='black'
              zIndex={2}
              mt={'-27px'}
              padding='2px'
              _hover={{
                opacity: '0.9'
              }}
            >
              {' '}
              {GridData[0].title}
            </Text>
          </Link>
        </AspectRatio>
      </GridItem>
      {GridData.slice(1, 3).map((item, i) => (
        <GridItem colStart={3} rowStart={i + 1} key={i}>
          <AspectRatio>
            <Link href={item.link} display='flex' flexDirection={'column'}>
              <Image src={item.image} objectFit='cover' rounded={'3x1'} />
              <Text
                w={'full'}
                opacity={'0.6'}
                bg={'white'}
                textColor='black'
                zIndex={2}
                mt={'-75px'}
                padding='2px'
                _hover={{
                  opacity: '0.9'
                }}
              >
                {' '}
                {item.title}
              </Text>
            </Link>
          </AspectRatio>
        </GridItem>
      ))}
      {GridData.slice(4, 6).map((item, i) => (
        <GridItem colStart={4} rowStart={i + 1} key={i}>
          {' '}
          <AspectRatio>
            <Image src={item.image} objectFit='cover' rounded={'3x1'} />
          </AspectRatio>
        </GridItem>
      ))}
    </Grid>
  )
}
export default Story
