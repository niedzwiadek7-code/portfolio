'use client';

import React, {useState} from "react";
import {
  Flex, Stack,
  useMediaQuery,
  Button, IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon
} from "@chakra-ui/icons";
import {useColorMode, useColorModeValue} from "@/components/ui/color-mode";
import {Avatar} from "@/components/ui/avatar";
import {Profile, Section} from "@/models";
import {
  DrawerBackdrop, DrawerBody, DrawerContent, DrawerHeader,
  DrawerRoot, DrawerTrigger
} from "@/components/ui/drawer";

type Props = {
  profile: Profile
  sections: Section[]
}

type SectionButtonProps = {
  section: Section
  scrollTo: (id: string) => void
  functionToMake?: () => void
}

const SectionButton: React.FC<SectionButtonProps> = ({
  section,
  scrollTo,
  functionToMake
}) => {
  return (
    <Button
      variant="ghost"
      style={{
        fontWeight: "bold"
      }}
      onClick={() => {
        scrollTo(section.id)
        if (functionToMake) {
          functionToMake()
        }
      }}
    >
      {section.name}
    </Button>
  )
}

const Navbar: React.FC<Props> = ({
  profile,
  sections
}) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"], {
    ssr: false
  });
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.100", "gray.900");
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    const navbar = document.getElementById("navbar");

    if (element) {
      const headerHeight = navbar?.clientHeight || 0;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition - 10,
        behavior: "smooth"
      })
    }
  }

  return (
    <Flex
      bg={backgroundColor}
      px={4}
      h={16}
      id={"navbar"}
      // boxShadow={scroll ? "base" : "none"}
      zIndex="sticky"
      position="fixed"
      as="header"
      alignItems={"center"}
      justifyContent={"space-between"}
      w="100%"
    >
      <Avatar
        name={profile.name}
        onClick={() => scrollTo("mainSection")}
      />

      <Flex
        alignItems="center"
      >
        <Stack
          direction="row"
          gap={4}
          style={{
            fontWeight: "bold"
          }}
        >
          {
            isLargerThan768 && sections.map(section => (
              <SectionButton
                key={section.id}
                section={section}
                scrollTo={scrollTo}
              />
            ))
          }

          <IconButton
            variant="subtle"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>

          {
            !isLargerThan768 && (
              <DrawerRoot
                placement='top'
                open={open}
                onOpenChange={e => setOpen(e.open)}
              >
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                  <IconButton
                    variant="subtle"
                    onClick={() => setOpen(true)}
                  >
                    <HamburgerIcon />
                  </IconButton>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerBody
                      padding={0}
                    >
                      <Stack>
                        {
                          sections.map(section => (
                            <SectionButton
                              key={section.id}
                              section={section}
                              scrollTo={scrollTo}
                              functionToMake={() => setOpen(false)}
                            />
                          ))
                        }
                      </Stack>
                    </DrawerBody>
                  </DrawerHeader>
                </DrawerContent>
              </DrawerRoot>
            )
          }
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Navbar
