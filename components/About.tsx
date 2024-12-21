import React from 'react'
import {Profile} from "@/models";
import {Box, Container, HStack, Image, Separator, Stack, Text, useMediaQuery} from "@chakra-ui/react";

type Props = {
  profile: Profile
}

const About = ({profile}: Props) => {
  return (
    <Container maxW={"3xl"} id="about">
      <Stack
        as={Box}
        textAlign={"center"}
        // spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 10 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${profile.mainColor}.400`} fontWeight={800}>
              01
            </Text>
            <Text
              fontWeight={800}
              width={70}
            >
              O mnie
            </Text>
          </HStack>
          <Separator orientation="horizontal" />
          {/*<Divider orientation="horizontal" />*/}
        </Stack>
        <Box
          direction="row"
          // align="flex-start"
          // justify="center"
          px={10}
          py={4}
          gap={10}
        >
          <Box
            float={{
              base: "none",
              sm: "left",
            }}
            display={{
              base: 'flex',
              sm: 'block'
            }}
            justifyContent='center'
            width={{
              base: '100%',
              sm: 'auto'
            }}
            pr={{
              base: 2,
              sm: 4,
            }}
            pb={{
              base: 4,
              sm: 0,
            }}
          >
            <Image
              rounded="md"
              src={profile.image}
              alt={profile.name}
              width={150}
            />
          </Box>
          <Text
            color={"gray.600"}
            // fontSize={"lg"}
            textAlign={"justify"}
          >
            {profile.about}
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default About
