import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import useRazorpay from "react-razorpay";
import { useSelector } from "react-redux";

export default function Checkoutpage() {
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const Razorpay = useRazorpay();
  const params = {
    price: 300000,
    name: userName,
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
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"lg"}
            fontWeight={600}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Hire Instructor
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>₹</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              3000
            </Text>
            <Text color={"gray.500"}>/month</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              5.000 page views
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              50 automation executions
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              50 identified users
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              All features
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            border={"0px"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
            onClick={handlePayment}
          >
            Start your Premium
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
