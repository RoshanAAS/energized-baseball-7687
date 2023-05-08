import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import useRazorpay from "react-razorpay";
import { useDispatch } from "react-redux";
import { updateHire } from "../redux/hireReducer/action";


//   description
// :
// "description 1"
// experience
// :
// 89
// id
// :
// "1"
// image
// :
// "https://mir-s3-cdn-cf.behance.net/user/115/69b51228213405.5f1f1fe6752b8.png"
// location
// :
// "location 1"
// name
// :
// "Nelson Greenfelder"
// rating
// :
// 11
// role
// :
// "097"

const TeacherCard = ({
  name,
  image,
  rating,
  role,
  location,
  status,
  id,
 
}) => {

  const navigate = useNavigate();
  const  dispatch=useDispatch()
  const Razorpay = useRazorpay();
  const params = {
    price: 500000,
    name: name,
    location,
  };
  const createOrder = (params) => {
    // ...
    return params;
  };

  const handlePayment = useCallback(async () => {
    const order = await createOrder(params);
    console.log(order);
    const options = {
      key: "rzp_test_Sd88VoR9NHci1p",
      amount: order.price,
      currency: "INR",
      name: order.name,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#f54f48",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open(
      dispatch(updateHire({id,status}))
    );
  }, [Razorpay]);

  return (
    <DIV>
      <Center py={6}>
        <Box
          maxW={"250px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          // boxShadow={"2xl"} 
          // rounded={'md'}
          overflow={"hidden"}
        >
          <Image
            h={"70px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={image}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {name}
              </Heading>
              <Text color={"gray.500"}>{role}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={'400'} textColor={'b'} color={"gray.500"}>Rating: {rating}</Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontSize={"sm"} textColor={'b'} color={"gray.500"}>
                 {location}
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#f54f48", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => {
                navigate("/checkout");
              }}
            >
              {status ? "Hired" : "Hire"}
            </Button>
          </Box>
        </Box>
      </Center>
    </DIV>
  );
};

export default TeacherCard;

const DIV = styled.div`
  @media screen and (max-width: 480px) and (min-width: 200px) {
    .sidebar {
      width: 50%;
      background-color: black;
    }
  }
`;
