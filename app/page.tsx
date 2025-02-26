"use client";

import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Invitation = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/1");
  }, [router]);

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, purple.600, pink.500, orange.400)"
    >
      <Spinner size="xl" color="white" />
    </Box>
  );
};

export default Invitation;
