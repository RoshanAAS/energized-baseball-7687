import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";
import { userLogin, userLogout } from "../../../redux/authreducer/action";
import Googlelogin from "./Googlelogin";
import Socialmedia from "../../Socialmedia";
import { useLocation, useNavigate } from "react-router-dom";
export default function SigninCard() {
  const [emptyInputError, setEmptyInputError] = useState(false);
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [load, setLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const location=useLocation()

  const handleLogin = async () => {
    if (!loginEmail || !loginPass) {
      setEmptyInputError(true);
    } else {
      setEmptyInputError(false);
      setLoad(true);
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPass
        );
        dispatch(userLogin(res.user.displayName))



        toast({
          title: "Login Successfull",
          description: `welcome, ${res.user.displayName}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setLoad(false);
      } catch (e) {
        console.log(e);
        toast({
          description: e.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoad(false);
      }
    }

    if(!isAuth){
      navigate('/')
    }


  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      bgImage={
        "https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      }
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"white"} fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            to explore us <Link color={"blue.400"}>More</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"tomato"}
                color={"white"}
                border={"0px"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
              <Socialmedia />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
