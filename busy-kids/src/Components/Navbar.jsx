import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import Logo from "../Logo/BusyKids.png";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import SignInModal from "./authcom/signin/SigninModal";
import SignUpModal from "./authcom/signup/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { userLogout, userStatusUpdate } from "../redux/authreducer/action";
import { useEffect } from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const { isAuth, userName } = useSelector((state) => state.authReducer);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userStatusUpdate(user.displayName));
      } else {
        dispatch(userLogout());
      }
    });
  }, []);

  const handleLogout = async () => {
    dispatch(userLogout());
    await signOut(auth);
  };
  return (
    <DIV>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        // minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        w={"100%"}
        backgroundColor={"#CFD8DC"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          w={"50%"}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          style={{
            // border: '1px solid red',
            height: "auto",
            // width: '50%',
            alignItems: "center",
          }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })} ///
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            {/* <img src={Logo} alt="logo" style={{
                            // border: '1px solid red',
                            height: '100px',
                            width: '80%',
                            padding : '10px',
                            WebkitBorderRadius : '10px'
                        }} /> */}

            {/*  w={"100%"} h={"59"}  */}
            <Image src={Logo} alt="logo" w={"100%"} h={"59"} />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* <NavLink to={'/signin'}> */}

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"black"}
            bg={"none"}
            href={"#"}
            _hover={{
              bg: "#f54f48",
              color: "white",
            }}
          >
            {isAuth ? <Text>{userName}</Text> : <SignInModal />}
          </Button>

          {/* </NavLink> */}
          {/* <NavLink to={"/signup"}> */}
          {isAuth ? (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"black"}
              bg={"none"}
              href={"#"}
              _hover={{
                bg: "#f54f48",
                color: "white",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"black"}
              bg={"none"}
              href={"#"}
              _hover={{
                bg: "#f54f48",
                color: "white",
              }}
            >
              <SignUpModal />
            </Button>
          )}

          {/* </NavLink> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </DIV>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

const NAV_ITEMS = [
  {
    label: "Learn",
    children: [
    {
      label: "Learn Car Loan",
      href: "/car-loan",
    },
    {
      label: "Learn Gold Loan",
      href: "/gold-loan",
    },
    {
      label: "Learn Home Loan",
      href: "/home-loan",
    },
    ],
  },
  
  {
    label: "Tech",
    children: [
      {
        label: "Evaluate Gold Loan",
        href: "",
      },
      {
        label: "Evaluate Home Loan",
      },
      {
        label: "New & Noteworthy",
      },
    ],
  },
  {
    label: "Play",
    href: "/play-game",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "About",
    href: "#",
  },
];

const DIV = styled.div`
  align-items: center;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 10;
`;
