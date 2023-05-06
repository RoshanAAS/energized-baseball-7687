import React from "react";
import Banner from "../components/Banner";
import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Heading color={"#f54f48"} as={"h1"} size={"xl"}>
        Teach
      </Heading>
      <br />
      <SimpleGrid
        style={{
          width: "90%",
          // border : '1px solid red',
          margin: "auto",
          padding: "10px",
        }}
        columns={{ sm: 2, md: 2, lg: 4, base: 1 }}
        gap={7}
      >
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/teaching_children_at_home_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Teaching Your Children at Home
            </Heading>
            <Text pt="2" fontSize="sm">
              Are you looking for resources to teach your children during the
              coronavirus pandemic? Explore personal finance resources.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/*  */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/innovative_educator_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Innovative Educator
            </Heading>
            <Text pt="2" fontSize="sm">
              Each month, we honor an Innovative Educator who has found exciting
              new ways to teach financial skills.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/* \ */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/your_money_your_future_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Your Money, Your Future
            </Heading>
            <Text pt="2" fontSize="sm">
              An interactive guide to budgeting, saving and more money topics to
              set students on a path to financial fitness.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/*  */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/play_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Play
            </Heading>
            <Text pt="2" fontSize="sm">
              Ready to get your game on? Test your money skills and give your
              brain a workout with these fun and educational games.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
      </SimpleGrid>
      <br />
      <Heading color={"#f54f48"} as={"h1"} size={"xl"}>
        Learn
      </Heading>
      <br />
      <SimpleGrid
        style={{
          width: "90%",
          // border : '1px solid red',
          margin: "auto",
          padding: "10px",
        }}
        columns={{ sm: 2, md: 2, lg: 4, base: 1 }}
        gap={7}
      >
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://th.bing.com/th/id/R.59242538d56287eec04ed9d1a4e88a34?rik=u58YO9%2flLryViw&riu=http%3a%2f%2fbargainbabe.com%2fwp-content%2fuploads%2f2014%2f03%2fmobile-banking.jpg&ehk=4m2XN9c33Bx%2fWMDgq1Nmh%2fp1C1P6DWjwTCa59LPsFKg%3d&risl=&pid=ImgRaw&r=0"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Mobile Banking
            </Heading>
            <Text pt="2" fontSize="sm">
              Mobile banking means your account is accessible virtually
              anywhere, anytime.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/*  */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/evaluating_your_finances_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Evaluating Your Finances
            </Heading>
            <Text pt="2" fontSize="sm">
              Regularly assessing your finances is crucial to staying on track
              with your budget.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/* \ */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/educating_your_children_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Educating Your Children
            </Heading>
            <Text pt="2" fontSize="sm">
              The earlier you can start teaching your children about finance,
              the better.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
        {/*  */}
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            // border: '1px solid red'
          }}
        >
          <Image
            width={"80%"}
            marginLeft={"8%"}
            src="https://www.practicalmoneyskills.com/assets/images/cards/credit_sq_270_270.jpg"
          />
          <br />
          <Stack spacing="3">
            <Heading fontSize={"22px"} color={"#B0BEC5"}>
              Credit
            </Heading>
            <Text pt="2" fontSize="sm">
              Understanding the wise use of credit is essential to achieving
              many financial goals.
            </Text>
            <Link color="blue">Learn More</Link>
          </Stack>
        </Box>
      </SimpleGrid>
      <br />
      <About />
    </div>
  );
};

export default Home;
