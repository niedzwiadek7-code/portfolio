'use client'

import React from 'react'
import {SocialMedia} from "@/models";
import {
  Box,
  HStack,
  Stack,
  Text,
  Heading, Center, Icon, Link,
} from "@chakra-ui/react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa6";
import Section from "@/components/Section";

type Props = {
  socialMedia: SocialMedia,
  mainColor: string
}

const Experience = ({socialMedia, mainColor}: Props) => {
  return (
    <Section
      mainColor={mainColor}
      sectionId='contact'
      sectionTitle='Kontakt'
      count='04'
    >
      <Box
        display='flex'
        flexDirection={'column'}
        // align="flex-start"
        // justify="center"
        px={12}
        py={4}
        gap={10}
      >
        <Stack
          textAlign={"center"}
          gap={4}
        >
          <Heading fontSize={"3xl"}>
            Pozostańmy w kontakcie
          </Heading>
          {/*<Text color={"gray.600"} fontSize={"xl"} px={4}>*/}
          {/*  {profile.contact}*/}
          {/*</Text>*/}
          <Text
            fontWeight={600}
            fontSize={"lg"}
            px={4}
          >
            <Link
              color={`${mainColor}.500`}
              href={socialMedia.mail}
              variant='plain'
            >
              {socialMedia.mail.split("mailto:")[1]}
            </Link>
          </Text>
          <Center>
            <HStack pt={4} gap={6}>
              <Icon
                onClick={() => window.open(socialMedia.linkedin, "_blank")}
                size='xl'
                cursor='pointer'
              >
                <FaLinkedin />
              </Icon>
              <Icon
                onClick={() => window.open(socialMedia.github, "_blank")}
                size='xl'
                cursor='pointer'
              >
                <FaGithub />
              </Icon>
              <Icon
                onClick={() => window.open(socialMedia.mail, "_blank")}
                size='xl'
                cursor='pointer'
              >
                <FaEnvelope />
              </Icon>
            </HStack>
          </Center>
        </Stack>
      </Box>
    </Section>
  )
}

export default Experience
