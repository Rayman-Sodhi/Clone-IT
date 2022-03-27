import React, { useState } from "react";
import {
  Box,
  Center,
  Checkbox,
  CheckIcon,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
} from "@native-base/icons";
import Image from "next/image";
//@ts-ignore
import DatePicker from "react-datepicker";
import Header from "../components/Header";
import { useRouter } from "next/router";

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

const DatePopup = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box zIndex={-1}>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        //@ts-ignore
        padding={10}
      />
    </Box>
  );
};

function Search(props: any) {
  const [startDate, setStartDate] = useState(new Date());
  const information = [
    {
      mainText: "CITY, AREA OR PROPERTY",
      subText: "Goa,India",
    },
    {
      mainText: "CHECK-IN:",
      subText: "Thu, 16 Dec 2021",
    },
    {
      mainText: "CHECK-OUT:",
      subText: "Fri, 17 Dec 2021",
    },
    {
      mainText: "ROOMS & GUESTS",
      subText: "1 Room, 2 Adults",
    },
  ];
  return (
    <HStack
      bg="#09223D"
      px={48}
      py={1}
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
    >
      <HStack space={4} alignItems="center">
        {information.map((item, index) => {
          return (
            <HStack key={index}>
              <Pressable
                bg="coolGray.600"
                px={2}
                py={1}
                borderRadius="sm"
                zIndex={-1}
              >
                <VStack>
                  <DatePopup />
                  <Text fontSize="md" color="white" fontWeight="normal">
                    {item.subText}
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
          );
        })}
      </HStack>
      <HStack>
        <NativeBaseProvider config={config} isSSR>
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Box
              height={12}
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              width={32}
              bg={{
                linearGradient: {
                  colors: ["#008CFF", "#0a488a"],
                  start: [0, 0],
                  end: [0, 0],
                },
              }}
            >
              <Text color="white" fontWeight="medium" fontSize="md">
                SEARCH
              </Text>
            </Box>
          </Pressable>
        </NativeBaseProvider>
      </HStack>
    </HStack>
  );
}
function HotelInformation(props: any) {
  let [service, setService] = React.useState("");
  return (
    <Box bg="#CFE5FA" px={{ lg: "40", md: "20" }} py={5} flex={1} zIndex={-1}>
      <HStack justifyContent="space-between">
        <VStack>
          <HStack alignItems="center">
            <Link
              href="https://nativebase.io"
              _text={{
                color: "#008CFF",
                fontSize: "xs",
                fontWeight: "bold",
                textDecorationLine: "none",
              }}
            >
              Home
            </Link>
            <Icon as={EvilIcons} name="chevron-right" size="4" />
            <Text fontSize="xs" color="coolGray.500" fontWeight="medium">
              Hotels and more in Goa
            </Text>
          </HStack>
          <Text fontWeight="bold" color="coolGray.800" fontSize="4xl" mt={16}>
            Hotels, Villas, Apartments and more in Goa
          </Text>
          <HStack alignItems="center">
            <HStack alignItems="center">
              <Text fontSize="sm" color="coolGray.800" fontWeight="semibold">
                Sort By:
              </Text>
              <Select
                selectedValue={service}
                borderColor="#CFE5FA"
                minWidth="100"
                placeholder="POPULARITY"
                color="#008CFF"
                _selectedItem={{
                  bg: "red.200",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Popularity" value="currency" />
                <Select.Item label="Price-High to Low" value="currency" />
                <Select.Item label="Price-Low to High" value="currency" />
                <Select.Item label="UserRating-High to Low" value="currency" />
              </Select>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>|</Text>
              <Text color="coolGray.500" fontWeight="medium">
                Showing 1530 properties in Goa
              </Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack space={10}>
          <Image
            src="/images/hotel1.jpeg"
            alt="Vercel Logo"
            width={80}
            height={96}
          />
          <Input
            width={80}
            InputLeftElement={
              <Icon
                pl={1}
                as={AntDesign}
                name="search1"
                size="5"
                _light={{ color: "coolGray.500" }}
                _dark={{ color: "coolGray.500" }}
              />
            }
            _hover={{ bg: "white" }}
            _focus={{ bg: "white" }}
            bg="white"
            color="coolGray.500"
            fontSize="md"
            flex={1}
            borderWidth={0}
            outline="none"
            placeholder="Search Locality and Property"
          />
        </VStack>
      </HStack>
    </Box>
  );
}

function Filters(props: any) {
  const filterType = [
    {
      filterType: "Free Cancellation,Zero Payment",
      numberAviable: "(0)",
    },
    {
      filterType: "Safe and Hygienic Stays",
      numberAviable: "(83)",
    },
    {
      filterType: "EMI Deals Available",
      numberAviable: "(2)",
    },
    {
      filterType: "Free Breakfast",
      numberAviable: "(123)",
    },
    {
      filterType: "Free Cancellation",
      numberAviable: "(20)",
    },
  ];
  const filterPrice = [
    {
      priceRange: "₹ 148 - ₹ 2000",
      numberAviable: "(230)",
    },
    {
      priceRange: "₹ 2000 - ₹ 4000",
      numberAviable: "(300)",
    },
    {
      priceRange: "₹ 4000 - ₹ 10500",
      numberAviable: "(120)",
    },
    {
      priceRange: "₹ 10500 - ₹ 30000",
      numberAviable: "(40)",
    },
    {
      priceRange: "₹ 30000+",
      numberAviable: "(32)",
    },
  ];
  const Locality = [
    {
      place: "North Goa",
    },
    {
      place: "South Goa",
    },
    {
      place: "Calangute",
    },
    {
      place: "Baga",
    },
    {
      place: "Candolim",
    },
    {
      place: "Anjuna",
    },
  ];

  const otherArea = [
    {
      place: "Margao",
    },
    {
      place: "Vasco",
    },
    {
      place: "Agonda",
    },
    {
      place: "Varca",
    },
  ];

  const hotelInfo = [
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      imageThree: "/images/hotel3.jpeg",
      imageFour: "/images/hotel4.jpeg",
      hotelName: "The Lalit Golf & Spa Resort",
      ratingNumber: "3395",
      category: "Palolem",
      type: "Couple Friendly",
      food: "Breakfast Included",
      offerText: "Great Choice! Booked 100+ times in last 15 Days",
      offerIconName: "",
      initailAmount: "₹9998",
      finalAmount: "₹9399",
      taxAmount: "+₹2,400 taxes & fees",
      startPrice: "₹3933",
      linkText: "Login & unlock a secreat deal!",
      exclusiveOfferIcon: "flash-circle",
      exclusiveOffer:
        "Exclusive offer - SBI Credit Card Users. Get INR 1199 Off",
      mmt: "MYTLUXE",
    },
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      imageThree: "/images/hotel3.jpeg",
      imageFour: "/images/hotel4.jpeg",
      hotelName: "The Lalit Golf & Spa Resort",
      ratingNumber: "3395",
      category: "Palolem",
      type: "Couple Friendly",
      food: "Breakfast Included",
      offerText: "Great Choice! Booked 100+ times in last 15 Days",
      offerIconName: "",
      initailAmount: "₹9998",
      finalAmount: "₹9399",
      taxAmount: "+₹2,400 taxes & fees",
      startPrice: "₹3933",
      linkText: "Login & unlock a secreat deal!",
      exclusiveOfferIcon: "flash-circle",
      exclusiveOffer:
        "Exclusive offer - SBI Credit Card Users. Get INR 1199 Off",
      mmt: "sponsored",
    },
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      imageThree: "/images/hotel3.jpeg",
      imageFour: "/images/hotel4.jpeg",
      hotelName: "The Lalit Golf & Spa Resort",
      ratingNumber: "3395",
      category: "Palolem",
      type: "Couple Friendly",
      food: "Breakfast Included",
      offerText: "Great Choice! Booked 100+ times in last 15 Days",
      offerIconName: "",
      initailAmount: "₹9998",
      finalAmount: "₹9399",
      taxAmount: "+₹2,400 taxes & fees",
      startPrice: "₹3933",
      linkText: "Login & unlock a secreat deal!",
      exclusiveOfferIcon: "flash-circle",
      exclusiveOffer:
        "Exclusive offer - SBI Credit Card Users. Get INR 1199 Off",
      mmt: "sponsored",
    },
  ];
  const router = useRouter();
  return (
    <HStack px={{ lg: "40", md: "24" }} space={2} zIndex={-1}>
      <VStack width="25%">
        <Text fontSize="lg" color="coolGray.800" fontWeight="semibold">
          Select Filters
        </Text>
        <VStack mt={5}>
          <Text fontSize="md" color="coolGray.800" fontWeight="medium">
            Popular Filters
          </Text>
          <VStack mt={2} space={1}>
            {filterType.map((item, index) => {
              return (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {item.numberAviable == "0" ? (
                    <>
                      <Checkbox
                        value="checkbox"
                        color="#9ca3af"
                        _text={{ fontSize: "xs" }}
                      >
                        {item.filterType}
                      </Checkbox>
                      <Text color="#9ca3af" fontSize="xxs">
                        {item.numberAviable}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Checkbox value="checkbox" _text={{ fontSize: "sm" }}>
                        {item.filterType}
                      </Checkbox>
                      <Text color="coolGray.800" fontSize="xxs">
                        {item.numberAviable}
                      </Text>
                    </>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </VStack>
        <Link
          mt={1}
          href="https://nativebase.io"
          _text={{
            color: "#008CFF",
            fontSize: "xs",
            fontWeight: "bold",
            textDecorationLine: "none",
          }}
        >
          See 4 more
        </Link>
        <VStack mt={5}>
          <Text fontSize="md" color="coolGray.800" fontWeight="medium">
            Price
          </Text>
          <VStack mt={2} space={1}>
            {filterPrice.map((item, index) => {
              return (
                <HStack
                  key={index}
                  alignItems="center"
                  space={1}
                  justifyContent="space-between"
                >
                  {item.numberAviable == "0" ? (
                    <>
                      <Checkbox
                        value="checkbox"
                        color="#9ca3af"
                        _text={{ fontSize: "sm" }}
                      >
                        {item.priceRange}
                      </Checkbox>
                      <Text color="#9ca3af">{item.numberAviable}</Text>
                    </>
                  ) : (
                    <>
                      <Checkbox value="checkbox" _text={{ fontSize: "sm" }}>
                        {item.priceRange}
                      </Checkbox>
                      <Text color="coolGray.800">{item.numberAviable}</Text>
                    </>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </VStack>
        <Text fontSize="md" color="coolGray.800" fontWeight="medium" mt={5}>
          Your Budget
        </Text>
        <HStack alignItems="center" space={2}>
          <Input placeholder="Min" width={24} py={2} />
          <Text color="coolGray.800" fontWeight="semibold" fontSize="sm">
            TO
          </Text>
          <Input placeholder="Max" width={24} py={2} />
          <IconButton
            size="sm"
            variant="unstyled"
            bg="#008CFF"
            icon={
              <Icon size="md" as={AntDesign} name="arrowright" color="white" />
            }
            //@ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          />
        </HStack>
        <Text fontSize="md" color="coolGray.800" fontWeight="medium" mt={5}>
          Locality
        </Text>
        {Locality.map((item, index) => {
          return (
            <Checkbox
              value="checkbox"
              key={index}
              _text={{ fontSize: "sm" }}
              mt={2}
            >
              {item.place}
            </Checkbox>
          );
        })}
        <Text fontSize="md" color="coolGray.800" fontWeight="medium" mt={5}>
          Other Areas
        </Text>
        {otherArea.map((item, index) => {
          return (
            <Checkbox
              value="checkbox"
              key={index}
              _text={{ fontSize: "sm" }}
              mt={2}
            >
              {item.place}
            </Checkbox>
          );
        })}
      </VStack>
      <VStack width="75%">
        <Text color="coolGray.800" fontSize="3xl" fontWeight="bold">
          Recommended for You
        </Text>
        {hotelInfo.map((item, index) => {
          return (
            <Pressable
              key={index}
              //@ts-ignore
              onPress={() => {
                router.push("/Hotel");
              }}
            >
              <Box
                borderWidth={1}
                borderColor="coolGray.300"
                borderRadius="sm"
                width="100%"
                mt={2}
              >
                <HStack
                  alignItems="center"
                  justifyContent="space-evenly"
                  py={2}
                >
                  <VStack space={2}>
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width="250"
                      height="180"
                    />
                    <HStack space={3}>
                      <Image
                        src={item.imageTwo}
                        alt="Vercel Logo"
                        width={64}
                        height={40}
                      />
                      <Image
                        src={item.imageThree}
                        alt="Vercel Logo"
                        width={64}
                        height={40}
                      />
                      <Image
                        src={item.imageFour}
                        alt="Vercel Logo"
                        width={64}
                        height={40}
                      />
                      <Image
                        src={item.imageFour}
                        alt="Vercel Logo"
                        width={64}
                        height={40}
                      />
                    </HStack>
                  </VStack>
                  <VStack alignItems="start" space={2}>
                    <Pressable
                      p="2"
                      borderWidth="1"
                      borderRadius="md"
                      borderColor="#E5D1A4"
                      // @ts-ignore
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text color="#E5D1A4" fontSize="xs" fontWeight="medium">
                        {item.mmt}
                      </Text>
                    </Pressable>
                    <Text color="coolGray.800" fontWeight="semibold">
                      {item.hotelName}
                    </Text>
                    <Text>{item.category}</Text>
                    <Center bg="#BCC1C4" py={2} px={2} rounded="md">
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="coolGray.800"
                      >
                        {item.type}
                      </Text>
                    </Center>
                    <HStack alignItems="center">
                      <Icon
                        as={AntDesign}
                        name="check"
                        color="green.500"
                        size="5"
                      />
                      <Text color="green.500" fontSize="sm" fontWeight="normal">
                        {item.food}
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon
                        as={MaterialCommunityIcons}
                        name={item.exclusiveOfferIcon}
                        color="#a8a29e"
                        size="5"
                      />
                      <Text color="#a8a29e" fontSize="xs" fontWeight="normal">
                        {item.offerText}
                      </Text>
                    </HStack>
                  </VStack>
                  <Divider orientation="vertical" />
                  <VStack alignItems="end">
                    <Text
                      textDecorationLine="line-through"
                      color="coolGray.500"
                    >
                      {item.initailAmount}
                    </Text>
                    <Text
                      fontWeight="semibold"
                      color="coolGray.800"
                      fontSize="xl"
                    >
                      {item.finalAmount}
                    </Text>
                    <Text
                      color="coolGray.500"
                      fontSize="xs"
                      fontWeight="medium"
                    >
                      {item.taxAmount}
                    </Text>
                    <Text
                      fontSize={10}
                      color="coolGray.400"
                      fontWeight="normal"
                    >
                      Per Night
                    </Text>
                    <HStack alignItems="center" space={1}>
                      <Text
                        fontSize={10}
                        color="coolGray.800"
                        fontWeight="semibold"
                      >
                        No Cost
                      </Text>
                      <NativeBaseProvider config={config} isSSR>
                        <Center
                          width={10}
                          rounded="full"
                          borderWidth={1}
                          bg={{
                            // @ts-ignore
                            linearGradient: {
                              colors: ["#008CFF", "#0a488a"],
                              start: [0, 0],
                              end: [0, 0],
                            },
                          }}
                        >
                          <Text
                            fontSize={10}
                            color="coolGray.800"
                            fontWeight="semibold"
                          >
                            EMI
                          </Text>
                        </Center>
                      </NativeBaseProvider>
                    </HStack>
                    <HStack alignItems="center" space={1}>
                      <Text
                        color="coolGray.800"
                        fontWeight="semibold"
                        fontSize="xs"
                      >
                        starts at
                      </Text>
                      <Text
                        fontSize="lg"
                        color="coolGray.800"
                        fontWeight="semibold"
                      >
                        {item.startPrice}
                      </Text>
                    </HStack>
                    <Link
                      href="https://nativebase.io"
                      mt={2}
                      _text={{
                        color: "#008CFF",
                        fontSize: "xs",
                        fontWeight: "bold",
                        textDecorationLine: "none",
                      }}
                    >
                      {item.linkText}
                    </Link>
                  </VStack>
                </HStack>
              </Box>
              <Box bg="#C3EAE2" width="100%" px={4} py={2}>
                <HStack alignItems="center" space={3}>
                  <Icon as={AntDesign} name="exclamationcircleo" size="5" />
                  <Text>{item.exclusiveOffer}</Text>
                </HStack>
              </Box>
            </Pressable>
          );
        })}
      </VStack>
    </HStack>
  );
}
export default function HotelList(props: any) {
  return (
    <ScrollView h="100vh">
      <VStack>
        <Header />
        <Search />
        <HotelInformation />
        <Filters />
      </VStack>
    </ScrollView>
  );
}
