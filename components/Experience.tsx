import React from 'react'
import {Experience as ExperienceModel} from "@/models";
import {
  Box,
  Container,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
  Card, Badge,
} from "@chakra-ui/react";
import {LuCheck, LuPackage, LuShip} from "react-icons/lu";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle
} from "@/components/ui/timeline";
import {Avatar} from "@/components/ui/avatar";

type Props = {
  experience: ExperienceModel[],
  mainColor: string
}

const Experience = ({experience, mainColor}: Props) => {
  console.log(experience[0].dateRange.toString())
  return (
    <Container maxW={"3xl"} id="experience">
      <Stack
        as={Box}
        // textAlign={"center"}
        // spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 10 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${mainColor}.400`} fontWeight={800}>
              02
            </Text>
            <Text
              fontWeight={800}
            >
              Experience
            </Text>
          </HStack>
          <Separator orientation="horizontal" />
          {/*<Divider orientation="horizontal" />*/}
        </Stack>

          <Box
            direction="row"
            // align="flex-start"
            // justify="center"
            px={12}
            py={4}
            gap={10}
          >
            <TimelineRoot
              size="lg"
              fontSize="lg"
              // maxW="md"
            >
              {
                experience.map((exp, index) => (
                  <TimelineItem key={index}>
                    <TimelineConnector>
                      <Avatar
                        size="md"
                        name={exp.title}
                        src={exp.logo}
                        />
                    </TimelineConnector>
                    <TimelineContent gap={4}>
                      <div>
                        <TimelineTitle>{exp.title}</TimelineTitle>
                        <TimelineDescription>
                          {exp.dateRange.toString()}
                        </TimelineDescription>
                      </div>

                      <Card.Root size="sm">
                        <Card.Body textStyle="sm" lineHeight="tall">
                          {exp.description}
                        </Card.Body>

                        <Card.Footer>
                          {
                            exp.badges.map((badge, index) => (
                              <Badge
                                key={index}
                                colorPalette={badge.color}
                                borderRadius="full"
                                px="2"
                                py="1"
                                mr="1"
                              >
                                {badge.name}
                              </Badge>
                            ))
                          }
                        </Card.Footer>
                      </Card.Root>
                    </TimelineContent>
                  </TimelineItem>
                ))
              }
            </TimelineRoot>
          </Box>
      </Stack>
    </Container>
  )
}

export default Experience
