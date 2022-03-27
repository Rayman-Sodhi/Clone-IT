import React from "react";
import {
  Box,
  CheckIcon,
  HStack,
  Icon,
  Pressable,
  Select,
  Text,
  VStack,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@native-base/icons";
import Image from "next/image";

export default function Header(props: any) {
  let [service, setService] = React.useState("");

  const optionList = [
    {
      iconName: "plane",
      iconText: "Flight",
      as: SimpleLineIcons,
    },
    {
      iconName: "md-business",
      iconText: "Hotels",
      as: Ionicons,
    },
    {
      iconName: "home-city-outline",
      iconText: "HomeStays",
      as: MaterialCommunityIcons,
    },
    {
      iconName: "airballoon-outline",
      iconText: "Holiday Packages",
      as: MaterialCommunityIcons,
    },
    {
      iconName: "train-outline",
      iconText: "Trains",
      as: Ionicons,
    },
    {
      iconName: "bus-outline",
      iconText: "Buses",
      as: Ionicons,
    },
    {
      iconName: "car",
      iconText: "Cabs",
      as: Ionicons,
    },
    {
      iconName: "passport",
      iconText: "Visa",
      as: MaterialCommunityIcons,
    },
  ];
  return (
    <HStack
      alignItems="center"
      px={{ lg: 32, md: 10 }}
      py={4}
      bg="white"
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex={1}
    >
      <HStack alignItems="center" space={5}>
        {/* <Image
          src="/images/mmtLogo.png"
          alt="MakeYourTrip Logo"
          width={72}
          height={32}
        /> */}

        <Text color="blue.900" fontWeight="bold">
          Make Your Trip
        </Text>
        {optionList.map((item, index) => {
          return (
            <VStack key={index} alignItems="center" justifyContent="center">
              <Icon size="5" as={item.as} name={item.iconName} />
              <Text fontSize="xs" color="coolGray.500" textAlign="center">
                {item.iconText}
              </Text>
            </VStack>
          );
        })}
      </HStack>
      <HStack>
        <VStack alignItems="center">
          <Box width={20}>
            <Select
              selectedValue={service}
              dropdownOpenIcon={<Icon as={Ionicons} name="home" />}
              borderColor="white"
              placeholder="INR"
              _selectedItem={{
                bg: "red.200",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="INR-Indian Rupee" value="currency" />
              <Select.Item label="USD-US Dollor" value="currency" />
              <Select.Item label="GBP-British Pound" value="currency" />
              <Select.Item label="YN-Japanese YEN" value="currency" />
              <Select.Item label="EUR-European Euro" value="currency" />
              <Select.Item label="ASD-Austrailian Dollor" value="currency" />
            </Select>
          </Box>
        </VStack>
        <Pressable>
          <HStack space={2} alignItems="center">
            <Image
              src="/images/mmtLoginLogo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
            <Text color="coolGray.800" fontSize="sm" fontWeight="semibold">
              Login or Create Account
            </Text>
          </HStack>
        </Pressable>
      </HStack>
    </HStack>
  );
}
