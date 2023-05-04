import { Box, Container, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import BannerImg from '../Logo/BannerImg.jpg'
import { AspectRatio } from '@chakra-ui/react'
const Banner = () => {
    return (
        <Box w={"80%"} style={{
            border: '1px solid red',
            margin: 'auto',
            height: '300px'
        }}>
            <HStack>
                <Box>
                    <Container>
                        Bankaroo is a virtual bank for kids, where you can teach them about the value of money in a safe environment.
                        <br />
                        Kids will learn how to budget, save up for goals and spend responsibly using our cool easy-to-use app and website.
                    </Container>
                </Box>
                <Box>
                    {/* <Image src={BannerImg} alt='banner' width={'80%'} /> */}

                    {/* Abhi */}
                    {/* <AspectRatio maxW='100%' ratio={16/9}>
                    <iframe width="50%" height="60%" src="https://www.youtube.com/embed/d-mKp1qZjek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </AspectRatio> */}
                    {/* <Box
                        as='iframe'
                        src='https://www.youtube.com/embed/d-mKp1qZjek'
                        width='100%'
                        // sx={{
                            aspectRatio= '20/20'
                        // }}
                    /> */}
                    <video width="100%" height="90%" controls>
                        <source src="https://youtu.be/d-mKp1qZjek"  />
                            {/* <source src="movie.ogg" type="video/ogg" /> */}
                                {/* Your browser does not support the video tag. */}
                            </video>

                        </Box>
                    </HStack>
                </Box>
                )
}

                export default Banner
