import React, { useState } from "react";
import { Box, HStack, Link, Text, VStack } from "native-base";

import Image from "next/image";
const List = [
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Chennai Flights",
    subText: "Mumbai,Delhi",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Goa Flights",
    subText: "Delhi,Varanasi",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Mumbai Flights",
    subText: "Bangalore",
    via: "via-",
  },
];
const List2 = [
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Pune Flights",
    subText: "Hyderabad, Goa",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Delhi Flights",
    subText: "Patna,Delhi",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Pune Flights",
    subText: "Delhi",
    via: "via-",
  },
];
const List3 = [
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Patna Flights",
    subText: "Mumbai",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Bangalore Flights",
    subText: "Jaunpur,Delhi",
    via: "via-",
  },
  {
    imageOne: "/images/hotel1.jpeg",
    place: "Jaipur Flights",
    subText: "Patna,Varanasi",
    via: "via-",
  },
];
export default function FlightList(props: any) {
  return (
    <Box shadow={5} mx={40} py={5} bg="white" borderRadius={10}>
      <HStack justifyContent="space-evenly">
        <VStack justifyContent="space-evenly" alignItems="start">
          {List.map((item, index) => {
            return (
              <VStack key={index} pt="2">
                <HStack alignItems="center" space={4}>
                  <Box rounded="full" overflow="hidden">
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={64}
                      height={64}
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
                        fontSize: "xs",
                        fontWeight: "bold",
                        textDecorationLine: "none",
                      }}
                    >
                      {item.subText}
                    </Link>
                  </VStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
        <VStack justifyContent="space-evenly" mt={2}>
          {List2.map((item, index) => {
            return (
              <HStack alignItems="center" space={4} key={index}>
                <Box rounded="full" overflow="hidden">
                  <Image
                    src={item.imageOne}
                    alt="Vercel Logo"
                    width={64}
                    height={64}
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
                      fontSize: "xs",
                      fontWeight: "bold",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.subText}
                  </Link>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
        <VStack justifyContent="space-evenly" mt={2}>
          {List3.map((item, index) => {
            return (
              <VStack key={index}>
                <HStack alignItems="center" space={4}>
                  <Box rounded="full" overflow="hidden">
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={64}
                      height={64}
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
                        fontSize: "xs",
                        fontWeight: "bold",
                        textDecorationLine: "none",
                      }}
                    >
                      {item.subText}
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
