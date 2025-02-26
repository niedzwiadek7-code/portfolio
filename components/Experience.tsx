import React from 'react'
import {DateRange, Experience as ExperienceModel} from "@/models";
import {
  Box,
  Container,
  HStack,
  Separator,
  Stack,
  Text,
  Card, Badge,
} from "@chakra-ui/react";
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
  return (
    <Container maxW={"4xl"} id="experience">
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
              Doświadczenie
            </Text>
          </HStack>
          <Separator orientation="horizontal" />
          {/*<Divider orientation="horizontal" />*/}
        </Stack>

          <Box
            direction="row"
            // align="flex-start"
            // justify="center"
            px={{
              base: 0,
              sm: 4,
              md: 12,
            }}
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
                          {DateRange.createFromObject(exp.dateRange).toString()}
                        </TimelineDescription>
                      </div>

                      <Card.Root size="sm">
                        <Card.Body
                          display="flex"
                          flexDirection="column"
                          flexWrap="wrap"
                          textStyle="sm"
                          lineHeight="tall"
                        >
                          <Text
                            fontWeight="bold"
                            textStyle="xl"
                            pb={2}
                          >
                            {exp.role}
                          </Text>
                          <Text>
                            {exp.description}
                          </Text>
                        </Card.Body>

                        <Card.Footer
                          display="flex"
                          gap={2}
                          flexWrap="wrap"
                        >
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
