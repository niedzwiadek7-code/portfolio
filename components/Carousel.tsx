import React, { useState } from "react";
import { Box, Image, Text, IconButton, HStack, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Slide } from "@/models/Slide";

type CarouselProps = {
  slides: Slide[];
  showArrows?: boolean;
  showDots?: boolean;
  mainColor: string;
};

const Carousel: React.FC<CarouselProps> = ({
                                             slides,
                                             showArrows = false,
                                             showDots = false,
                                             mainColor,
                                           }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  if (totalSlides === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <Box
      position="relative"
      width="full"
      maxW="1000px"
      mx="auto"
    >
      <Box position="relative">
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          objectFit="cover"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          borderRadius="md"
        />

        {showArrows && (
          <>
            <IconButton
              aria-label="Poprzedni slajd"
              position="absolute"
              left="0"
              top="50%"
              transform="translateY(-50%)"
              onClick={goToPrevious}
              bg="rgba(0, 0, 0, 0.4)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.6)" }}
              borderRadius="full"
            >
              <ChevronLeftIcon boxSize={6} />
            </IconButton>
            <IconButton
              aria-label="Następny slajd"
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              onClick={goToNext}
              bg="rgba(0, 0, 0, 0.4)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.6)" }}
              borderRadius="full"
            >
              <ChevronRightIcon boxSize={6} />
            </IconButton>
          </>
        )}
      </Box>

      <VStack
        align="flex-start"
        mt={4}
        gap={4}
      >
        <Text fontSize="2xl" fontWeight="bold">
          {currentSlide.title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {currentSlide.description}
        </Text>
      </VStack>

      {showDots && (
        <HStack mt={4} justify="center">
          {slides.map((_, index) => (
            <Box
              key={index}
              w={3}
              h={3}
              bg={index === currentIndex ? `${mainColor}.500` : "gray.300"}
              borderRadius="full"
              cursor="pointer"
              onClick={() => selectSlide(index)}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Carousel;
