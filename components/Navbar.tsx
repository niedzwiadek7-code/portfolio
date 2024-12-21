'use client';

import React from "react";
import {
  Flex, Stack,
  // useMediaQuery,
  Button, IconButton
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon
} from "@chakra-ui/icons";
import {useColorMode, useColorModeValue} from "@/components/ui/color-mode";
import {Avatar} from "@/components/ui/avatar";
import {Profile} from "@/models";

type Props = {
  profile: Profile
}

const Navbar: React.FC<Props> = ({
  profile
}) => {
  // const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.100", "gray.900");

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
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
            onClick={() => scrollTo("about")}
          >
            About
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
            onClick={() => scrollTo("experience")}
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </Button>

          <IconButton
            variant="subtle"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Navbar
