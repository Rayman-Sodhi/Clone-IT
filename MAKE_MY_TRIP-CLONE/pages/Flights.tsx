import React, { useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Radio,
  Pressable,
  ScrollView,
} from "native-base";
import {
  AntDesign,
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@native-base/icons";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import CreditCard from "../components/CreditCard";
import DestinationList from "../components/DestinationList";
import Hyperlink from "../components/Hyperlink";
import Offers from "../components/Offers";
import { useRouter } from "next/router";
import HeaderTwo from "../components/HeaderTwo";
import Download from "../components/Download";
import FlightScroll from "../components/FlightScroll";
import Header from "../components/Header";

const fareType = [
  { type: "Regular Normal Fares", bgColor: "#80C6FF" },
  { type: "Armed Forces Fares", bgColor: "#F2F2F2" },
  { type: "Collage Student Fares", bgColor: "#F2F2F2" },
  { type: "Senior Citizen Fares", bgColor: "#F2F2F2" },
  { type: "Senior Citizen Fares", bgColor: "#F2F2F2" },
];

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
  {
    iconName: "plane",
    iconText: "Charter Flight",
    as: Fontisto,
  },
];

const Searches = [
  {
    from: "Mumbai",
    to: "Patna",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
  },
  {
    from: "Delhi",
    to: "Goa",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
  },
];

export default function Flights(props: any) {
  const router = useRouter();
  const [nav, setNav] = useState(true);
  const changeVisibility = () => {
    if (window.scrollY >= 40) {
      setNav(false);
    } else setNav(true);
    // console.log(window.scrollY);
  };

  React.useEffect(() => {
    // window is accessible here.
    // console.log("window.innerHeight", window.innerHeight);
    window.addEventListener("scroll", changeVisibility);
  }, []);
  return (
    <ScrollView h="100vh">
      <Box
        shadow={4}
        h={{ lg: "480px" }}
        bg={{
          linearGradient: {
            colors: ["#0A1221", "#124276"],
            start: [0, 0],
            end: [0, 1],
          },
        }}
      >
        <VStack>
          <HeaderTwo />
          {nav ? <></> : <Header />}
          {nav ? (
            <Box
              shadow="4"
              position="absolute"
              top={20}
              mx={20}
              borderRadius={10}
              zIndex={1}
              bg="white"
              alignSelf="center"
              alignItems="center"
              py="4"
              flexGrow={1}
              px={4}
              width="50%"
            >
              <HStack justifyContent="space-evenly" flexGrow={1} width="100%">
                {optionList.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      // @ts-ignore
                      onPress={() => {
                        router.push("/ExploreHotel");
                      }}
                    >
                      <VStack alignItems="center" justifyContent="center">
                        <Icon size="5" as={item.as} name={item.iconName} />
                        <Text
                          fontSize="xs"
                          color="coolGray.500"
                          textAlign="center"
                        >
                          {item.iconText}
                        </Text>
                      </VStack>
                    </Pressable>
                  );
                })}
              </HStack>
            </Box>
          ) : (
            <></>
          )}
          <Box
            px={8}
            width="80%"
            height="64"
            bgColor="white"
            borderRadius="md"
            alignSelf="center"
            mt="24"
          >
            <VStack>
              <HStack justifyContent="space-between" pt="4" pb="4">
                <Radio.Group
                  size="sm"
                  defaultValue="1"
                  flexDirection="row"
                  name="tripSettingsRadioGroup"
                >
                  <HStack space="3">
                    <Radio
                      value="1"
                      _text={{
                        fontSize: "xs",
                        fontWeight: "bold",
                      }}
                      colorScheme="green"
                      icon={
                        <Icon as={<MaterialCommunityIcons name="alien" />} />
                      }
                    >
                      ONEWAY
                    </Radio>
                    <Radio
                      value="2"
                      _text={{
                        fontSize: "xs",
                        fontWeight: "bold",
                      }}
                      colorScheme="red"
                      icon={
                        <Icon as={<MaterialCommunityIcons name="fire" />} />
                      }
                    >
                      ROUNDTRIP
                    </Radio>
                    <Radio
                      value="3"
                      _text={{
                        fontWeight: "bold",
                        fontSize: "xs",
                      }}
                      colorScheme="warning"
                      icon={
                        <Icon
                          as={<MaterialCommunityIcons name="exclamation" />}
                        />
                      }
                    >
                      MULTICITY
                    </Radio>
                  </HStack>
                </Radio.Group>
                <HStack justifyContent="center" alignItems="center">
                  <Text fontWeight="bold" fontSize="xs" textAlign="center">
                    International Flights |
                  </Text>

                  <Text fontWeight="bold" fontSize="xs" color="#4A4A4A">
                    Domestic Flights |
                  </Text>
                </HStack>
              </HStack>
              <HStack
                borderWidth="1"
                borderRadius="lg"
                borderColor="coolGray.300"
              >
                <VStack
                  py="4"
                  px="4"
                  w={{ lg: "56" }}
                  borderRightWidth="1"
                  borderRightColor="coolGray.300"
                >
                  <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                    FROM
                  </Text>
                  <Text
                    color="black"
                    fontSize="4xl"
                    lineHeight="md"
                    fontWeight="bold"
                  >
                    Delhi
                  </Text>
                  <Text color="black" fontSize="xs" noOfLines={1}>
                    DEL,Delhi Airport India
                  </Text>
                </VStack>
                <VStack
                  py="4"
                  px="4"
                  w={{ lg: "56" }}
                  borderRightWidth="1"
                  borderRightColor="coolGray.300"
                >
                  <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                    TO
                  </Text>
                  <Text
                    color="black"
                    fontSize="4xl"
                    lineHeight="md"
                    fontWeight="bold"
                  >
                    Banglore
                  </Text>
                  <Text color="black" fontSize="xs" noOfLines={1}>
                    BLR, Kempegowda International Airport India
                  </Text>
                </VStack>
                <VStack
                  py="4"
                  px="4"
                  w={{ lg: "40" }}
                  borderRightWidth="1"
                  borderRightColor="coolGray.300"
                >
                  <HStack justifyContent="unset" alignItems="center">
                    <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                      DEPERATURE
                    </Text>
                    <Icon
                      size="sm"
                      color="blue.700"
                      as={MaterialIcons}
                      name="keyboard-arrow-down"
                    />
                  </HStack>
                  <HStack alignItems="flex-end" space="2">
                    <Text fontSize="3xl" fontWeight="bold">
                      25
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                      Dec21
                    </Text>
                  </HStack>
                  <Text color="black" fontSize="xs" noOfLines={1}>
                    Saturday
                  </Text>
                </VStack>
                <VStack
                  py="4"
                  px="4"
                  w={{ lg: "40" }}
                  borderRightWidth="1"
                  borderRightColor="coolGray.300"
                >
                  <HStack justifyContent="unset" alignItems="center">
                    <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                      Return
                    </Text>
                    <Icon
                      size="sm"
                      color="blue.700"
                      as={MaterialIcons}
                      name="keyboard-arrow-down"
                    />
                  </HStack>
                  <Text
                    pt="1"
                    fontSize="xs"
                    fontWeight="bold"
                    color="coolGray.600"
                  >
                    Tap to add a return date for biggest discounts
                  </Text>
                </VStack>
                <VStack py="4" px="4">
                  <HStack justifyContent="unset" alignItems="center">
                    <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                      TRAVELS AND CLASSES
                    </Text>
                    <Icon
                      size="sm"
                      color="blue.700"
                      as={MaterialIcons}
                      name="keyboard-arrow-down"
                    />
                  </HStack>
                  <HStack alignItems="flex-end" space="2">
                    <Text fontSize="3xl" fontWeight="bold">
                      1
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                      Traveller
                    </Text>
                  </HStack>
                  <Text lineHeight="undefined" fontSize="xs">
                    Economic/Premium Economy
                  </Text>
                </VStack>
              </HStack>
              <HStack justifyContent="space-between" alignItems="center">
                <HStack alignItems="center" width="70%" space={1} py={1}>
                  <Box width="10%">
                    <Text
                      fontWeight="medium"
                      color="coolGray.400"
                      fontSize="xs"
                    >
                      Select A Fare Type:
                    </Text>
                  </Box>
                  <Radio.Group
                    defaultValue="1"
                    size="sm"
                    name="exampleGroup"
                    flexDirection="row"
                  >
                    {fareType.map((item, index) => {
                      return (
                        <Box
                          mt={5}
                          width="16%"
                          key={index}
                          px={1}
                          bg={item.bgColor}
                          borderRadius={10}
                          mx={1}
                        >
                          <Radio
                            _text={{
                              mx: 2,
                              fontWeight: "semibold",
                              fontSize: "10",
                            }}
                            value="1"
                            icon={
                              <Icon
                                as={<AntDesign name="check" color="#098BFF" />}
                              />
                            }
                            my={1}
                          >
                            {item.type}
                          </Radio>
                        </Box>
                      );
                    })}
                  </Radio.Group>
                </HStack>
                <HStack
                  justifyContent="center"
                  alignItems="center"
                  pt={10}
                  space={2}
                  width="30%"
                >
                  <Text fontWeight="bold" fontSize="10" textAlign="center">
                    Trending Searches:
                  </Text>
                  <HStack space={3} alignItems="center">
                    {Searches.map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          borderRadius="md"
                          px={1}
                          bg="#F2F2F2"
                          // @ts-ignore
                          onPress={() => {
                            console.log("hello");
                          }}
                        >
                          <HStack alignItems="center" space={1}>
                            <Text
                              fontSize={10}
                              color="coolGray.400"
                              fontWeight="normal"
                            >
                              {item.from}
                            </Text>
                            <Icon
                              as={item.as}
                              name={item.iconName}
                              color="#098BFF"
                              size={6}
                            />
                            <Text
                              fontSize={10}
                              color="coolGray.400"
                              fontWeight="normal"
                            >
                              {item.to}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </HStack>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
        <Pressable
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <Box
            position="absolute"
            top={-20}
            bottom={0}
            alignSelf="center"
            height={10}
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            width={48}
            bg={{
              linearGradient: {
                colors: ["#4EADFD", "#0E64F3"],
                start: [0, 0],
                end: [0, 0],
              },
            }}
          >
            <Text color="white" fontWeight="bold" fontSize="md">
              SEARCH
            </Text>
          </Box>
        </Pressable>
        <HStack alignItems="center" space={1} justifyContent="center" mt="auto">
          <Icon
            as={FontAwesome}
            name="angle-double-down"
            color="coolGray.200"
            size={7}
          />
          <Text color="white" fontWeight="bold" fontSize="xs">
            Explore More
          </Text>
          <Icon
            as={FontAwesome}
            name="angle-double-down"
            color="coolGray.200"
            size={7}
          />
        </HStack>
      </Box>
      <Box bg="coolGray.200">
        <VStack space={5}>
          <Explore />
          <FlightScroll />
          <Offers />
          <CreditCard />
          <Box mx="40">
            <Download />
          </Box>

          <DestinationList />
          <Hyperlink />
        </VStack>
      </Box>
      <Footer />
    </ScrollView>
  );
}
