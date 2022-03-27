import React, { useState } from "react";
import { Hidden, HStack, Icon, Pressable, Text, VStack } from "native-base";
import { EvilIcons } from "@native-base/icons";
import Image from "next/image";
export default function Header(props: any) {
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

  return nav ? (
    <HStack
      alignItems="center"
      pr={{ lg: 40, md: 10 }}
      pl={{ lg: 20, md: 6 }}
      justifyContent="space-between"
    >
      {/* <Image
        src="/images/mmt.png"
        alt="MakeYourTrip Logo"
        width="130"
        height={32}
      /> */}
      <Text color="white" fontWeight="bold">
        Make Your Trip
      </Text>
      <HStack alignItems="center">
        <HStack
          px={2}
          space={2}
          borderLeftWidth={1}
          borderLeftStyle="dashed"
          borderLeftColor="coolGray.700"
        >
          <Image
            src="/images/mmtbiz.png"
            alt="MakeYourTrip Logo"
            width={32}
            height={24}
          />
          <VStack>
            <Text color="white" fontSize="md" fontWeight="semibold">
              Introducing myBiz
            </Text>
            <Text color="coolGray.200" fontSize={10} fontWeight="semibold">
              MakeYourTrip for Business
            </Text>
          </VStack>
        </HStack>
        <HStack
          px={2}
          space={2}
          borderLeftWidth={1}
          borderLeftStyle="dashed"
          borderLeftColor="coolGray.700"
        >
          <Image
            src="/images/mmtbag.png"
            alt="MakeYourTrip Logo"
            width={32}
            height={19}
          />
          <VStack>
            <Text color="white" fontSize="md" fontWeight="semibold">
              My Trips
            </Text>
            <Text color="coolGray.200" fontSize={10} fontWeight="semibold">
              Manage your bookings
            </Text>
          </VStack>
        </HStack>
        <Pressable
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <HStack
            borderRadius="md"
            alignItems="center"
            p={2}
            bg={{
              linearGradient: {
                colors: ["#4FACFC", "#0a488a"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
          >
            <Image
              src="/images/loginlogo2.png"
              alt="Vercel Logo"
              width={24}
              height={24}
            />
            <Text color="white" fontWeight="bold" fontSize="10">
              Login or Create Account
            </Text>
            <Icon
              ml={4}
              as={EvilIcons}
              name="chevron-down"
              color="white"
              fontWeight="bold"
              size="6"
            />
          </HStack>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <HStack
            borderRadius="md"
            alignItems="center"
            p={2}
            bg="#2C3644"
            opacity={0.8}
          >
            <Image
              src="/images/flag.png"
              alt="Vercel Logo"
              width={12}
              height={12}
            />
            <Text color="coolGray.50" fontWeight="semibold" fontSize="10">
              IN | ENG | INR
            </Text>
            <Icon
              ml={4}
              as={EvilIcons}
              name="chevron-down"
              color="white"
              fontWeight="bold"
              size="6"
            />
          </HStack>
        </Pressable>
      </HStack>
    </HStack>
  ) : (
    <> </>
  );
}
