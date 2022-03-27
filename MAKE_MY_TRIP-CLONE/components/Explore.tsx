import React from "react";
import { Box, HStack, Icon, Pressable, Text, VStack } from "native-base";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@native-base/icons";

const List = [
  {
    iconName: "road",
    iconText: "Trip Ideas",
    subText: false,
    as: MaterialCommunityIcons,
  },
  {
    iconName: "image",
    iconText: "Trip Money",
    iconSubText: "Loans Credit & More",
    as: Entypo,
  },
  {
    iconName: "map-marker",
    iconText: "Nearby Getaways",
    subText: false,
    as: FontAwesome,
  },
  {
    iconName: "card-giftcard",
    iconText: "Gift Cards",
    subText: false,
    as: MaterialIcons,
  },
];

export default function Explore(props: any) {
  return (
    <Box
      bg="white"
      width="40%"
      shadow={6}
      rounded="full"
      px={3}
      py={3}
      justifyContent="center"
      mx={80}
      alignSelf="center"
    >
      <Pressable
        // @ts-ignore
        onPress={() => {
          console.log("hello");
        }}
      >
        <HStack alignItems="center" justifyContent="space-evenly">
          {List.map((item, index) => {
            return (
              <HStack key={index} alignItems="center" space={3}>
                <Icon as={item.as} name={item.iconName} color="#1E93FD" />
                {item.subText == false ? (
                  <Text fontSize="sm" color="coolGray.800" fontWeight="medium">
                    {item.iconText}
                  </Text>
                ) : (
                  <VStack>
                    <Text
                      fontSize="sm"
                      color="coolGray.800"
                      fontWeight="medium"
                    >
                      {item.iconText}
                    </Text>
                    <Text
                      fontSize={10}
                      color="coolGray.400"
                      fontWeight="normal"
                    >
                      {item.iconSubText}
                    </Text>
                  </VStack>
                )}
              </HStack>
            );
          })}
        </HStack>
      </Pressable>
    </Box>
  );
}
