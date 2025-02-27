import React from 'react'
import {Profile} from "@/models";
import {Box, Image, Text} from "@chakra-ui/react";
import Section from "@/components/Section";

type Props = {
  profile: Profile
}

const About = ({profile}: Props) => {
  return (
    <Section
      mainColor={profile.mainColor}
      count='01'
      sectionId='about'
      sectionTitle='O mnie'
    >
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
          textAlign={"justify"}
          whiteSpace={"pre-line"}
        >
          {profile.about}
        </Text>
      </Box>
    </Section>
  )
}

export default About
