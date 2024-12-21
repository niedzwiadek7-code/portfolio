import React from 'react'
import {Project as ProjectModel} from "@/models";
import {
  Box,
  Container,
  HStack,
  Separator,
  Stack,
  Text,
  Card, Badge, Image, Button, Link,
} from "@chakra-ui/react";

type Props = {
  projects: ProjectModel[],
  mainColor: string
}

const Projects = ({projects, mainColor}: Props) => {
  return (
    <Container maxW={"3xl"} id="about">
      <Stack
        as={Box}
        // textAlign={"center"}
        // spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 10 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${mainColor}.400`} fontWeight={800}>
              03
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
          display={"flex"}
          flexDirection={'column'}
          // align="flex-start"
          // justify="center"
          px={12}
          py={4}
          gap={6}
        >
          {
            projects.map((project) => {
              return (
                <Card.Root
                  key={project.name}
                  rounded={"md"}
                  shadow={"md"}
                  flexDirection="row"
                  overflow={"hidden"}
                >
                  <Image
                    objectFit={"cover"}
                    maxW={"200px"}
                    src={project.image}
                    alt={project.name}
                  />

                  <Box>
                    <Card.Body
                      display={"flex"}
                      flexDirection={"column"}
                      gap={4}
                    >
                      <Card.Title> {project.name} </Card.Title>
                      <Card.Description>
                        {project.description}
                      </Card.Description>
                      <HStack>
                        {
                          project.badges.map((badge) => (
                            <Badge key={badge.name} colorPalette={badge.color}>
                              {badge.name}
                            </Badge>
                          ))
                        }
                      </HStack>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="subtle"
                      >
                        <Link
                          variant="plain"
                          href={project.projectLink}
                          target="_blank"
                        >
                          Visit Page
                        </Link>
                      </Button>
                    </Card.Footer>
                  </Box>
                </Card.Root>
              )
            })
          }
        </Box>
      </Stack>
    </Container>
  )
}

export default Projects