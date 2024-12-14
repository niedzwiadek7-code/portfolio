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

  return (
    <Flex
      bg={backgroundColor}
      px={4}
      h={16}
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
      />

      <Flex
        alignItems="center"
      >
        <Stack
          direction="row"
          gap={8}
          style={{
            fontWeight: "bold"
          }}
        >
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
          >
            About
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            style={{
              fontWeight: "bold"
            }}
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
