import React from 'react'
import Banner from '../Components/Banner'
import { Box, Heading, Image, Link, SimpleGrid, Stack, Text, border } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Banner />
      <SimpleGrid style={{
        width:'90%',
        // border : '1px solid red',
        margin : 'auto'
      }} columns={{ sm: 2, md: 3, lg: 4, base: 1 }} gap={7}>
        <Box style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          // border: '1px solid red'
        }}>
          <Image width={'80%'} marginLeft={'8%'} src='https://www.practicalmoneyskills.com/assets/images/cards/teaching_children_at_home_sq_270_270.jpg' />
          <br />
          <Stack spacing='3'>
            <Heading fontSize={'22px'}>Teaching Your Children at Home</Heading>
            <Text pt='2' fontSize='sm'>Are you looking for resources to teach your children during the coronavirus pandemic? Explore personal finance resources.</Text>
            <Link color='blue'>Learn More</Link>
          </Stack>

        </Box>
        {/*  */}
        <Box style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          // border: '1px solid red'
        }}>
          <Image width={'80%'} marginLeft={'8%'} src='https://www.practicalmoneyskills.com/assets/images/cards/innovative_educator_sq_270_270.jpg' />
          <br />
          <Stack spacing='3'>
            <Heading fontSize={'22px'}>Innovative Educator</Heading>
            <Text pt='2' fontSize='sm'>Each month, we honor an Innovative Educator who has found exciting new ways to teach financial skills.</Text>
            <Link color='blue'>Learn More</Link>
          </Stack>

        </Box>
        {/* \ */}
        <Box style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          // border: '1px solid red'
        }}>
          <Image width={'80%'} marginLeft={'8%'} src='https://www.practicalmoneyskills.com/assets/images/cards/your_money_your_future_sq_270_270.jpg' />
          <br />
          <Stack spacing='3'>
            <Heading fontSize={'22px'}>Your Money, Your Future</Heading>
            <Text pt='2' fontSize='sm'>An interactive guide to budgeting, saving and more money topics to set students on a path to financial fitness.</Text>
            <Link color='blue'>Learn More</Link>
          </Stack>

        </Box>
        {/*  */}
        <Box style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          // border: '1px solid red'
        }}>
          <Image width={'80%'} marginLeft={'8%'} src='https://www.practicalmoneyskills.com/assets/images/cards/play_sq_270_270.jpg' />
          <br />
          <Stack spacing='3'>
            <Heading fontSize={'22px'}>Play</Heading>
            <Text pt='2' fontSize='sm'>Ready to get your game on? Test your money skills and give your brain a workout with these fun and educational games.</Text>
            <Link color='blue'>Learn More</Link>
          </Stack>

        </Box>
      
      </SimpleGrid>
    </div>
  )
}

export default Home
