'use client'

import React, { useState } from 'react';
import { Project as ProjectModel } from "@/models";
import {
  Box,
  Container,
  HStack,
  Separator,
  Stack,
  Text,
  Card,
  Badge,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaReact, FaServer, FaBook } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { LinkType } from "@/models/Profile";
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import Carousel from "@/components/Carousel";
import {Slide} from "@/models/Slide";
import {CgEye, CgPresentation} from "react-icons/cg";
import {LuPresentation} from "react-icons/lu";

type Props = {
  projects: ProjectModel[],
  mainColor: string
};

const Projects = ({ projects, mainColor }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPresentation, setSelectedPresentation] = useState<Slide[]>([]);
  const getLinkIcon = (linkName: LinkType): IconType => {
    const iconMap: Record<LinkType, IconType> = {
      'frontend': FaReact,
      'backend': FaServer,
      'docs': FaBook,
    };
    return iconMap[linkName] || FaGithub;
  };

  const handlePresentationOpen = (presentation: Slide[]) => {
    setSelectedPresentation(presentation);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container
      maxW={"4xl"}
      id="projects"
    >
      <Stack
        pb={{ base: 20, md: 10 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${mainColor}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>
              Projekty
            </Text>
          </HStack>
          <Separator orientation="horizontal" />
        </Stack>

        <Box
          display={"flex"}
          flexDirection={'column'}
          px={{ base: 0, sm: 4, md: 12 }}
          py={4}
          gap={6}
        >
          {projects.map((project) => (
            <Card.Root
              key={project.name}
              rounded={"md"}
              shadow={"md"}
              flexDirection={{
                base: "column",
                sm: "row"
              }}
              overflow={"hidden"}
            >
              <Image
                objectFit={"cover"}
                maxW={{ base: "100%", sm: "200px" }}
                maxH={{ base: "200px", sm: '100%' }}
                src={project.image}
                alt={project.name}
              />

              <Box>
                <Card.Body display={"flex"} flexDirection={"column"} gap={4}>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Description>
                    {project.description}
                  </Card.Description>
                  <HStack wrap={"wrap"}>
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge.name}
                        colorPalette={badge.color}
                      >
                        {badge.name}
                      </Badge>
                    ))}
                  </HStack>
                </Card.Body>

                <Card.Footer
                  display="flex"
                  gap={3}
                  flexWrap={"wrap"}
                  justifyContent={"flex-end"}
                  direction={{ base: "column", sm: "row" }}
                >
                  {/*<Stack direction={{ base: "column", sm: "row" }} width={"100%"} gap={2}>*/}
                    <HStack>
                      {project.githubLinks.map((link) => {
                        const Icon = getLinkIcon(link.type);
                        return (
                          <Button
                            key={link.url}
                            variant="ghost"
                            colorScheme={mainColor}
                            size="sm"
                          >
                            <Link href={link.url} target="_blank" _hover={{ textDecoration: "none" }}>
                              <Icon /> {link.name}
                            </Link>
                          </Button>
                        );
                      })}
                    </HStack>

                    <HStack>
                      {(project.presentation && project.presentation.length) ? (
                        <Button
                          variant="subtle"
                          colorScheme={mainColor}
                          onClick={() => handlePresentationOpen(project.presentation!)}
                        >
                          <LuPresentation />
                          Zaprezentuj
                        </Button>
                      ) : ''}

                      <Button variant="subtle">
                        <Link
                          href={project.projectLink}
                          target="_blank"
                          _hover={{ textDecoration: "none" }}
                        >
                          <CgEye />
                          Zobacz projekt
                        </Link>
                      </Button>
                    </HStack>
                  {/*</Stack>*/}
                </Card.Footer>
              </Box>
            </Card.Root>
          ))}
        </Box>

        <DialogRoot
          open={isOpen}
          closeOnInteractOutside
          size='lg'
        >
          <DialogContent
            width='95%'
          >
            <DialogHeader>
              <DialogCloseTrigger
                onClick={handleClose}
              />
            </DialogHeader>
            <DialogBody

            >
              <Carousel
                slides={selectedPresentation}
                showArrows
                mainColor={mainColor}
              />
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      </Stack>
    </Container>
  );
};

export default Projects;
