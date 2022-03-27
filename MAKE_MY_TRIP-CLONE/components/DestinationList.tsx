import React, { useState } from "react";
import { Box, HStack, Link, Text, VStack } from "native-base";
import Image from "next/image";

const List1 = [
  {
    imageOne: "/images/goa.jpeg",
    place: "Goa",
    linkText: "Hotels, Budget Hotels, Resorts, Best Hotels",
  },
  {
    imageOne: "/images/delhi.jpeg",
    place: "Delhi",
    linkText: "Hotels, Budget Hotels, Resorts, Best Hotels",
  },
  {
    imageOne: "/images/bangalore.jpeg",
    place: "Bangalore",
    linkText: "Hotels, Budget Hotels, Resorts, Best Hotels",
  },
];

const List2 = [
  {
    imageOne: "/images/delhi.jpeg",
    place: "Ooty",
    linkText: "Hotels, Resorts, Cottges, Budget Hotels",
  },
  {
    imageOne: "/images/mumbai.jpeg",
    place: "Mumbai",
    linkText: "Hotels, Budget Hotels, Resorts, Couple Hotels",
  },
  {
    imageOne: "/images/shimla.jpeg",
    place: "Shimla",
    linkText: "Hotels, Budget Hotels, Best Hotels, Resorts",
  },
];

const List3 = [
  {
    imageOne: "/images/jaipur.jpeg",
    place: "Jaipur",
    linkText: "Hotels, Resorts, Cottges, Budget Hotels",
  },
  {
    imageOne: "/images/mnali.jpeg",
    place: "Manali",
    linkText: "Hotels, Resorts, Budget Hotels, Best Hotels",
  },
  {
    imageOne: "/images/delhi.jpeg",
    place: "Others",
    linkText: "Puri Hotels, OYO Delhi, Alleppey Houseboat",
  },
];

export default function DestinationList(props: any) {
  return (
    <Box
      shadow={5}
      mx={40}
      px={6}
      py={5}
      bg="white"
      borderRadius={10}
      mt={5}
      flexGrow={1}
    >
      <HStack justifyContent="space-evenly" flexGrow={1}>
        <VStack
          justifyContent="space-evenly"
          alignItems="start"
          space={3}
          flexGrow={1}
        >
          {List1.map((item, index) => {
            return (
              <VStack key={index} pt="2" flexGrow={1}>
                <HStack alignItems="center" space={1} flexGrow={1}>
                  <Box rounded="full" overflow="hidden">
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                    />
                  </Box>
                  <VStack>
                    <Text
                      fontWeight="semibold"
                      color="coolGray.800"
                      fontSize="md"
                    >
                      {item.place}
                    </Text>
                    <Link
                      href="https://nativebase.io"
                      _text={{
                        color: "coolGray.800",
                        fontSize: "10",
                        fontWeight: "medium",
                        textDecorationLine: "none",
                        maxWidth: "80%",
                      }}
                    >
                      {item.linkText}
                    </Link>
                  </VStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
        <VStack justifyContent="space-evenly" mt={2} space={3} flexGrow={1}>
          {List2.map((item, index) => {
            return (
              <HStack alignItems="center" space={1} key={index} flexGrow={1}>
                <Box rounded="full" overflow="hidden">
                  <Image
                    src={item.imageOne}
                    alt="Vercel Logo"
                    width={48}
                    height={48}
                    // @ts-ignore
                    borderRadius={20}
                    rounded="full"
                  />
                </Box>
                <VStack flexGrow={1}>
                  <Text
                    fontWeight="semibold"
                    color="coolGray.800"
                    fontSize="md"
                  >
                    {item.place}
                  </Text>
                  <Link
                    href="https://nativebase.io"
                    _text={{
                      color: "coolGray.800",
                      fontSize: "10",
                      fontWeight: "medium",
                      maxWidth: "80%",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.linkText}
                  </Link>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
        <VStack justifyContent="space-evenly" mt={2} flexGrow={1}>
          {List3.map((item, index) => {
            return (
              <VStack key={index}>
                <HStack alignItems="center" space={1} flexGrow={1}>
                  <Box rounded="full" overflow="hidden">
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                      // @ts-ignore
                      borderRadius={20}
                      rounded="full"
                    />
                  </Box>
                  <VStack>
                    <Text
                      fontWeight="semibold"
                      color="coolGray.800"
                      fontSize="md"
                    >
                      {item.place}
                    </Text>
                    <Link
                      href="https://nativebase.io"
                      _text={{
                        color: "coolGray.800",
                        fontSize: "10",
                        fontWeight: "medium",
                        maxWidth: "80%",
                        textDecorationLine: "none",
                      }}
                    >
                      {item.linkText}
                    </Link>
                  </VStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </HStack>
    </Box>
  );
}
