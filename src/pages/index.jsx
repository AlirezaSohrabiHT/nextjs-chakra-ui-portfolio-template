import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
<Box
  display="flex"
  alignItems="center"
  justifyContent="center"
  borderRadius="full"
  overflow="hidden"
  width="350px"
  height="350px"
>
        <img
          src="/profile.png"
          width="350"
          height="350"
          alt="avatar bigheads"
          // style={{
          //   filter: 'blur(5px)', // Approximate blur effect
          //   display: 'block',
          // }}
          loading="eager"
        />
      </Box>
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Alireza Sohrabi{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span" color={color}>
              Building
            </Text>{" "}
            Web Platforms, Single-Page Applications, and Maintenance.
          </Heading>
          <Text py="4">
            A{" "}
            <Text as="span" fontWeight="600">
            full-stack web developer 
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="600">
            system administrator
            </Text>{" "}
            based in the IRAN, I specialize in creating scalable web solutions, responsive design, and seamless user experiences.
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            Get in touch
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <Box
            display={{ base: "flex", lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ base: "column", lg: isOdd(index) ? "row-reverse" : "row" }}
            key={index}
          >
           
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
<img
  src={item.image}
  width="500"
  height="500"
  alt={item.title}
  // style={{
  //   filter: 'blur(5px)', // Simulates the blur placeholder effect
  //   display: 'block',
  // }}
  loading="lazy" // Lazy-loads the image for performance
/>

            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4" style={{textAlign: 'justify'}}>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
