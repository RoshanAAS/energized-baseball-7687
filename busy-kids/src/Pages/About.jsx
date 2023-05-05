import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <div>
      <Heading color={"#f54f48"}>
        About Us
      </Heading>
      <br />
      <Box>
        <Container fontSize={'lg'} noOfLines={5}>
          Busy Kids started as a family project to help children learn how to manage their saving.
          Dani came up with the idea when he was 11 years old and helped with the design testing and marketing.
          Dad helped with the technology, and mom helped with the rest.Busy Kids is used and trusted by thousands of families, teachers and schools across the world.
        </Container>
      </Box>
      <br />
      <Box >
        <SimpleGrid width={'80%'} alignItems={'center'} padding={'7'} margin={'auto'} columns={{ sm: 1, md: 2, lg: 4 }} gap={7} >
          <Box>
            <Image margin={'auto'} width={'70%'} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/105606749?v=4' alt='Abhishek' />
            <br />
            <Heading as='h2' size={'md'}>ROSHAN</Heading>
            <br />
            <Text color={'#90A4AE'}>FOUNDER</Text>
            <br />
            <Text>Busy Kids started as a family project in 2023.Roshan started Busy Kids in 2023 when he could not find an app that could help kids tracking their money.</Text>
          </Box>
          <Box>
            <Image margin={'auto'} width={'70%'} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/110104180?v=4' alt='Reddy' />
            <br />
            <Heading as='h2' size={'md'}>TEJESH</Heading>
            <br />
            <Text color={'#90A4AE'}>FOUNDER</Text>
            <br />
            <Text>Busy Kids started as a family project in 2023.Tejesh started Busy Kids in 2023 when he could not find an app that could help kids tracking their money.</Text>
          </Box>
          <Box>
            <Image margin={'auto'} width={'70%'} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754335?v=4' alt='Manav' />
            <br />
            <Heading as='h2' size={'md'}>MANAV</Heading>
            <br />
            <Text color={'#90A4AE'}>FOUNDER</Text>
            <br />
            <Text>Busy Kids started as a family project in 2023.Manav started Busy Kids in 2023 when he could not find an app that could help kids tracking their money.</Text>
          </Box>
          <Box>
            <Image margin={'auto'} width={'70%'} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754426?v=4' alt='Abhi' />
            <br />
            <Heading as='h2' size={'md'}>ABHISHEK</Heading>
            <br />
            <Text color={'#90A4AE'}>FOUNDER</Text>
            <br />
            <Text>Busy Kids started as a family project in 2023.Abhishek started Busy Kids in 2023 when he could not find an app that could help kids tracking their money.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default About
