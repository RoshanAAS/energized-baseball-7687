import { Box, Container, HStack, Heading, Image,Text } from "@chakra-ui/react";
import React from "react";
import BannerImg from "../Logo/BannerImg.jpg";
import { AspectRatio } from "@chakra-ui/react";
import logo from "../Logo/BusyKids.png";
import styled from "@emotion/styled";
const Banner = () => {
  return (
    <DIV>
    <Box
      w={"95%"}
      style={{
        // border: "1px solid red",
        margin: "auto",
        // height: "500px",
      }}
    >
      <HStack spacing={10}>
        <Box textAlign={'center'}>
        
            <Image w={280} src={logo} />
            <Heading as="h2" size="lg">
              BUSY KID FOR SCHOOL EDITION
            </Heading>
            <br/>
            <Text fontSize={"lg"} as={'sample'} lineHeight={7}>
            Designed and developed with the help of teachers and school
            administrators to easily manage student accounts and to teach math
            and financial education. Built on top of the Bankaroo platform, kids
            enjoy the unique, kid-friendly experience loved by hundreds of
            thousands of members, while teachers have control over the students’
            accounts and activities. Create your free account (one free account
            per school).
            </Text>
           
        
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
          <iframe
            width="700"
            height="400"
            src={`https://www.youtube.com/embed/d-mKp1qZjek`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>
      </HStack>
    </Box>
    </DIV>
  );
};

export default Banner;

const DIV=styled.div`
  
  width: 100%;
 
  /* background-color: #e6e8d2; */
  padding: 100px;

`
