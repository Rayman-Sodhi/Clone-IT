import React, { useState } from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@native-base/icons";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  NativeBaseProvider,
  Link,
  ScrollView,
} from "native-base";
import Header from "../components/Header";
import HorizontalComponent from "../components/HorizontalComponent";
import Hyperlink from "../components/Hyperlink";
import MMTLuxe from "../components/MmtLuxe";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import HeaderTwo from "../components/HeaderTwo";
const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

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

export default function ExploreHotel() {
  const [tabName, setTabName] = React.useState("Login");
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
    <NativeBaseProvider config={config} isSSR>
      <ScrollView h="100vh">
        <Box
          h={{ lg: "480px" }}
          shadow={4}
          bg={{
            linearGradient: {
              colors: ["#071323", "#144478"],
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
                top={16}
                mx={20}
                borderRadius={10}
                zIndex={1}
                bg="white"
                alignSelf="center"
                alignItems="center"
                py="4"
                flexGrow={1}
                width="40%"
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
              height="56"
              bgColor="white"
              borderRadius="md"
              alignSelf="center"
              mt="24"
              // mt={3}
            >
              <VStack space={2} mt={2}>
                <HStack alignItems="end" justifyContent="center" space={2}>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="coolGray.800"
                  >
                    Book Domestic and International Hotels Online. To list your
                    property
                  </Text>
                  <Link
                    href="https://nativebase.io"
                    _text={{
                      color: "#008CFF",
                      fontSize: "xs",
                      fontWeight: "bold",
                      textDecorationLine: "none",
                    }}
                  >
                    Click Here
                  </Link>
                </HStack>
                <HStack
                  borderWidth="1"
                  borderRadius="lg"
                  borderColor="coolGray.300"
                >
                  <VStack
                    py="4"
                    px="4"
                    w={{ lg: "72" }}
                    borderRightWidth="1"
                    borderRightColor="coolGray.300"
                  >
                    <Text color="#4A4A4A" fontSize="sm" fontWeight="bold">
                      CITY / HOTEL / AREA / BUILDING
                    </Text>
                    <Text
                      color="black"
                      fontSize="4xl"
                      lineHeight="md"
                      fontWeight="bold"
                    >
                      Goa
                    </Text>
                    <Text color="black" fontSize="xs" noOfLines={1}>
                      India
                    </Text>
                  </VStack>
                  <VStack
                    py="4"
                    px="4"
                    w={{ lg: "56" }}
                    borderRightWidth="1"
                    borderRightColor="coolGray.300"
                  >
                    <HStack justifyContent="unset" alignItems="center">
                      <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                        Check In
                      </Text>
                      <Icon
                        size="sm"
                        color="blue.700"
                        as={MaterialIcons}
                        name="keyboard-arrow-down"
                      />
                    </HStack>
                    <HStack alignItems="center" space="2">
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
                    w={{ lg: "56" }}
                    borderRightWidth="1"
                    borderRightColor="coolGray.300"
                  >
                    <HStack justifyContent="unset" alignItems="center">
                      <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                        Check Out
                      </Text>
                      <Icon
                        size="sm"
                        color="blue.700"
                        as={MaterialIcons}
                        name="keyboard-arrow-down"
                      />
                    </HStack>
                    <HStack alignItems="center" space="2">
                      <Text fontSize="3xl" fontWeight="bold">
                        31
                      </Text>
                      <Text fontSize="xl" fontWeight="bold">
                        Dec21
                      </Text>
                    </HStack>
                    <Text color="black" fontSize="xs" noOfLines={1}>
                      Monday
                    </Text>
                  </VStack>
                  <VStack
                    py="4"
                    px="4"
                    w={{ lg: "48" }}
                    borderRightWidth="1"
                    borderRightColor="coolGray.300"
                  >
                    <HStack justifyContent="unset" alignItems="center">
                      <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                        ROOMS & GUESTS
                      </Text>
                      <Icon
                        size="sm"
                        color="blue.700"
                        as={MaterialIcons}
                        name="keyboard-arrow-down"
                      />
                    </HStack>
                    <HStack alignItems="end" space={2}>
                      <Text
                        pt="1"
                        fontSize="lg"
                        fontWeight="bold"
                        color="coolGray.800"
                      >
                        1 Room
                      </Text>
                      <Text
                        pt="1"
                        fontSize="lg"
                        fontWeight="bold"
                        color="coolGray.800"
                      >
                        2 Guests
                      </Text>
                    </HStack>
                  </VStack>
                  <VStack py="4" px="2" space={3}>
                    <HStack justifyContent="unset" alignItems="center">
                      <Text color="#4A4A4A" fontSize="md" fontWeight="bold">
                        Travelling for
                      </Text>
                      <Icon
                        size="sm"
                        color="blue.700"
                        as={MaterialIcons}
                        name="keyboard-arrow-down"
                      />
                    </HStack>
                    <Text
                      lineHeight="undefined"
                      fontSize="xs"
                      fontWeight="medium"
                      noOfLines={1}
                    >
                      Select a Reason(optional)
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </Box>
            <NativeBaseProvider config={config} isSSR>
              <Pressable
                alignItems="center"
                position="absolute"
                bottom={-20}
                left={0}
                right={0}
                // @ts-ignore
                onPress={() => {
                  console.log("hello");
                }}
              >
                <Box
                  height={10}
                  borderRadius="full"
                  alignItems="center"
                  justifyContent="center"
                  width={40}
                  bg={{
                    linearGradient: {
                      colors: ["#008CFF", "#0a488a"],
                      start: [0, 0],
                      end: [0, 0],
                    },
                  }}
                >
                  <Text color="white" fontWeight="bold" fontSize="lg">
                    SEARCH
                  </Text>
                </Box>
              </Pressable>
            </NativeBaseProvider>
            <HStack
              alignItems="center"
              space={1}
              justifyContent="center"
              mt={16}
            >
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
          </VStack>
        </Box>
        <VStack bg="coolGray.200" space={2} pt={5}>
          <MMTLuxe />
          <HorizontalComponent />
          <Hyperlink />
          <Footer />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
