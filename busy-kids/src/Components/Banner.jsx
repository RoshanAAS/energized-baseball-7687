
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Logo/BusyKids.png";
import styled from "@emotion/styled";
const Banner = () => {
  return (
    <DIV>
      <Box
        // w={"100%"}
        style={{
          width: "100%",
          height: "auto",
          // border: "1px solid red",
          margin: "auto",
          // height: "500px",
        }}
      >
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} gap={10}>
          <Box textAlign={"center"}>
            {/* <Image w={280} src={logo} /> */}
            <Heading color={"#f54f48"} as="h2" size="lg">
              THE VIRTUAL BANK FOR KIDS
            </Heading>
            <br />
            <Text fontSize={"lg"} as={"sample"} lineHeight={7}>
              Bankaroo is a virtual bank for kids, where you can teach them
              about the value of money in a safe environment. Kids will learn
              how to budget, save up for goals and spend responsibly using our
              cool easy-to-use app and website, while teachers have control over
              the students accounts and activities.
            </Text>
          </Box>
          <Box>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/d-mKp1qZjek`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </DIV>
  );
};

export default Banner;

const DIV = styled.div`
  width: 100%;
  /* background-color: #e6e8d2; */
  padding: 50px;
`;
