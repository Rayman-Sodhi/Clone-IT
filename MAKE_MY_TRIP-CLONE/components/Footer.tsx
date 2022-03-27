import React from "react";
import { Box, Divider, HStack, Icon, Text, VStack } from "native-base";
import { AntDesign, FontAwesome } from "@native-base/icons";

export default function Footer(pros: any) {
  return (
    <>
      <Box px={{ lg: 40, md: 10 }} py={10} bg="coolGray.300" zIndex={-1}>
        <VStack py={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <VStack space={1} width="50%" mt={3}>
              <Text fontSize="sm" fontWeight="semibold" color="coolGray.800">
                Q - How do I make a flight booking on MakeYourTrip?
              </Text>
              <Text
                fontSize="12"
                color="coolGray.800"
                fontWeight="thin"
                textAlign="start"
              >
                A: You can book a flight on MakeYourTrip in five easy steps:
                Head over to the MakeYourTrip flight booking page, Enter your
                departure and arrival destinations, Select your air travel
                dates, Choose from our wide range of flights based on your
                airfare preferences, Click on ‘Book Now’ and your air flight
                booking is done. Alternatively, you can also use the
                MakeYourTrip app for your flight ticket booking. Download the
                MakeYourTrip app, Put in the details i.e. date of journey,
                departure and arrival destinations, travel class of your choice,
                Select on your best comfortable option and click on ‘Book Now‘.
              </Text>
            </VStack>
            <VStack space={1} width="45%">
              <Text fontSize="sm" fontWeight="semibold" color="coolGray.800">
                Q - Can I avail domestic flight offers on MakeYourTrip?
              </Text>
              <Text
                fontSize="12"
                color="coolGray.800"
                fontWeight="thin"
                textAlign="start"
              >
                A: Of course, you can. While making domestic flight bookings,
                you can avail any special offer that is active at that time. In
                accordance with the offer selected, a listing of eligible
                flights would show up on your screen. You can then apply the
                price filter and click on the downwards arrow, following which
                budget-friendly flights would start showing up in ascending
                order from the top (lowest price on top).
              </Text>
            </VStack>
          </HStack>
          <Divider bg="coolGray.800" my={5} />
          <HStack alignItems="center" justifyContent="space-between" space={2}>
            <VStack space={1} width="50%">
              <Text fontSize="sm" fontWeight="semibold" color="coolGray.800">
                Q - How can I avail budget air tickets on MakeYourTrip?
              </Text>
              <Text fontSize="12" color="coolGray.800" fontWeight="thin">
                A: It’s super-easy to avail budget airfare while booking your
                flight tickets on MakeYourTrip. Just select the ‘Price’ filter
                once the available flight options are displayed and adjust
                according to your convenience. On the MakeYourTrip app, you can
                select the downward arrow, which will show the lowest airfare at
                the top and continue downward in ascending order.
              </Text>
            </VStack>
            <VStack space={2} width="45%">
              <Text fontSize="sm" fontWeight="semibold" color="coolGray.800">
                Q - Why could I not avail the flight booking offers at the time
                of checkout?
              </Text>
              <Text fontSize="12" color="coolGray.800" fontWeight="thin">
                A: MakeYourTrip makes use of a world-class real-time reservation
                database to list airfare and availability. As dynamic changes in
                airfare take place, or the available flight tickets sell out,
                the database reflects the changes in real-time. Hence, we
                suggest, you double-check online flight booking prices when
                purchasing flight tickets, as the airfare might have been
                dynamically updated since you first selected the air travel
                dates or planned your itinerary.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
      <Box bg="black" py={10} justifyContent="center" px={{ lg: 40, md: 10 }}>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" space={5}>
            <Icon as={AntDesign} name="twitter" color="white" size={5} />
            <Icon as={FontAwesome} name="facebook" color="white" size={5} />
          </HStack>
          <VStack alignItems="end">
            <Text color="white" fontWeight="semibold" fontSize="sm">
              © 2021 MakeYourTrip PVT. LTD.
            </Text>
            <Text color="white" fontWeight="semibold" fontSize="sm">
              Country India USA UAE
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
