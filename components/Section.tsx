'use client'

import React, { ReactNode } from "react";
import { Box, Container, HStack, Separator, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
  mainColor: string;
  sectionId: string;
  sectionTitle: string;
  count: string;
  children: ReactNode;
};

const MotionStack = motion(Stack);

const Section = ({
                   mainColor,
                   sectionId,
                   sectionTitle,
                   count,
                   children,
                 }: Props) => {
  return (
    <Container maxW="4xl" id={sectionId}>
      <MotionStack
        as={Box}
        pb={{ base: 20, md: 10 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <MotionStack
          align="center"
          direction="row"
          px={4}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <HStack mx={4}>
            <Text color={`${mainColor}.400`} fontWeight={800}>
              {count}
            </Text>
            <Text fontWeight={800}>{sectionTitle}</Text>
          </HStack>
          <Separator orientation="horizontal" />
        </MotionStack>

        {children}
      </MotionStack>
    </Container>
  );
};

export default Section;
