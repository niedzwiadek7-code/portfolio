import React from 'react'
import {Profile} from "@/models";
import {Box, Container, HStack, Image, Separator, Stack, Text} from "@chakra-ui/react";
import NextImage from 'next/image'

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
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${profile.mainColor}.400`} fontWeight={800}>
              01
            </Text>
            <Text
              fontWeight={800}
            >
              About
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
            float={"left"}
            pr={4}
          >
            <Image
              rounded="md"
              src={profile.image}
              alt={profile.name}
              width={150}
              // height={500}
            />
          </Box>
          <Text
            color={"gray.600"}
            fontSize={"lg"}
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
