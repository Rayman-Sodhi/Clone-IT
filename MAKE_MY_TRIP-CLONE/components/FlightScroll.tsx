import React from "react";
import { Box, HStack, Link, ScrollView, Text, VStack } from "native-base";
import Image from "next/image";

const List = [
  {
    imageOne: "/images/plane.png",
    imageText:
      " Call 0124-4628747 for international flight booking assistance!",
    linkText: false,
  },
  {
    imageOne: "/images/language.png",
    imageText: "We are now available in हिंदी!",
    linkText: "Click here to change language",
  },
  {
    imageOne: "/images/plane2.png",
    imageText: "Flight booking impacted due to COVID-19?",
    linkText: " Check refund status here ",
  },
  {
    imageOne: "/images/plane2.png",
    imageText: "Flight booking impacted due to COVID-19?",
    linkText: " Check refund status here ",
  },
];
export default function FlightScroll(props: any) {
  return (
    <Box px={{ lg: "40", md: "10" }} mt={3}>
      {/* @ts-ignore */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={4} flexDirection={{ lg: "row", md: "row" }}>
          {List.map((item, index) => {
            return (
              <Box key={index} borderRadius={10} bg="white" height={24}>
                <HStack px={6} py={4}>
                  <HStack alignItems="center" space={3}>
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                    />
                    {item.linkText == false ? (
                      <Text
                        noOfLines={2}
                        fontWeight="medium"
                        color="coolGray.800"
                        fontSize="sm"
                        flexGrow={1}
                        width="64"
                      >
                        {item.imageText}
                      </Text>
                    ) : (
                      <VStack>
                        <Text
                          noOfLines={2}
                          fontWeight="medium"
                          color="coolGray.800"
                          fontSize="sm"
                          flexGrow={1}
                          width="64"
                        >
                          {item.imageText}
                        </Text>
                        <Link
                          href="https://nativebase.io"
                          _text={{
                            color: "#44A0FD",
                            fontSize: "xs",
                            fontWeight: "bold",
                            textDecorationLine: "none",
                          }}
                        >
                          {item.linkText}
                        </Link>
                      </VStack>
                    )}
                  </HStack>
                </HStack>
              </Box>
            );
          })}
        </HStack>
      </ScrollView>
    </Box >
  );
}
