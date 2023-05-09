

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    Input,
    Button,
    useColorModeValue
} from '@chakra-ui/react';
import Logo from '../Logo/BusyKids.png'

const Footer = () => {
    return (
        <Box backgroundColor={"#CFD8DC"}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text as='b' fontSize={'lg'}>Product</Text>
                        <Link href={'#'}>Overview</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'#'}>Features</Link>
                            <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text as='b' fontSize={'lg'}>Company</Text>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact Us</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text as='b' fontSize={'lg'}>Legal</Text>
                        <Link href={'#'}>Cookies Policy</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text as='b' fontSize={'lg'}>Follow Us</Text>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text as='b' fontSize={'lg'}>About Us</Text>
                        <Link href={'#'}>Mission</Link>
                        <Link href={'#'}>Media</Link>
                        <Link href={'#'}>Partnerships</Link>
                        <Link href={'#'}>Advisory Council</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <SimpleGrid width={'85%'} columns={{ lg: 4, md: 2, sm: 1 }} margin='auto'>

                <Box>
                    <Input width={300} placeholder='Please Enter valid Email ID' backgroundColor={'white'} />
                </Box>
                <Box>
                    <Button width={200} backgroundColor={'black'} color='white' _hover={'teal'}>SUBSCRIBE NOW</Button>
                </Box>
                <Box>
                    <Link href="#"><Image margin={'auto'} style={{
                        width: '200px', height: '72%'
                    }} src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="Google Play" /></Link>
                </Box>
                <Box>
                    <Link href="#"><Image margin={'auto'} style={{
                        width: '200px', height: '72%'
                    }} src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="App Store" /></Link>
                </Box>
            </SimpleGrid>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Image src={Logo} width={'20%'} height={'35%'}/>
                </Flex>
                <Text pt={6} fontWeight={'bold'} fontSize={'lg'} textAlign={'center'}>
                    © 2023 Busy Kids. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}
export default Footer;
