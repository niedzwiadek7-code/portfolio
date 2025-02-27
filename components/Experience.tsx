'use client'

import React from 'react'
import { DateRange, Experience as ExperienceModel } from "@/models";
import {
  Box,
  Flex,
  Text,
  Badge,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Section from "@/components/Section";
import { Avatar } from '@/components/ui/avatar'
import {useColorModeValue} from "@/components/ui/color-mode";

type Props = {
  experience: ExperienceModel[],
  mainColor: string
}

const Experience = ({ experience, mainColor }: Props) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textSecondaryColor = useColorModeValue("gray.500", "gray.300");
  const boxShadow = useColorModeValue("sm", "sm");

  return (
    <Section
      mainColor={mainColor}
      count='02'
      sectionId="experience"
      sectionTitle="Doświadczenie"
    >
      <SimpleGrid columns={1} px={{ base: 4, md: 12 }} py={4}>
        {experience.map((exp, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={bgColor}
            borderColor={borderColor}
            boxShadow={boxShadow}
            _hover={{ boxShadow: "lg" }}
            transition="box-shadow 0.2s"
            p={4}
          >
            <Flex alignItems="center" mb={4}>
              <Avatar size="lg" name={exp.title} src={exp.logo} mr={4} />
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  {exp.title}
                </Text>
                <Text fontSize="sm" color={textSecondaryColor}>
                  {DateRange.createFromObject(exp.dateRange).toString()}
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {exp.role}
              </Text>
              <Text fontSize="sm" mb={2}>
                {exp.description}
              </Text>
              <Stack direction="row" gap={2} wrap="wrap">
                {exp.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    colorPalette={badge.color}
                    borderRadius="full"
                    px="2"
                    py="1"
                  >
                    {badge.name}
                  </Badge>
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default Experience;
