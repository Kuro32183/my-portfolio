import React, { FC } from 'react'

import { Box, Text, Spacer, VStack } from '@chakra-ui/react'

import CheckoutButton from '~/components/atoms/CheckoutButton'

const Coffee: FC = () => {
  return (
    <Box minHeight="100vh" position="relative">
      <VStack
        alignItems="center"
        justifyContent="center"
        pt={{ base: 40, lg: '25vh' }}
      >
        <CheckoutButton />
        <Spacer h="10vh" />
        <Text
          as="h2"
          fontSize={{ base: '1rem', md: '1.8rem' }}
          fontWeight="bold"
        >
          『コーヒーを淹れてください』とは？
        </Text>
        <Spacer h="1rem" />
        <Text
          fontSize="1rem"
          fontWeight="400"
          letterSpacing="1.2px"
          px={{ base: 14, md: '5rem', lg: '6rem' }}
          py={3}
          as="p"
          textAlign="left"
        >
          Stripeで作成された投げ銭システムです。
          <br />
          カード決済,Google
          Pay等を備えており、支援していただいた金額が安全にサイト制作者に届くように実装されました。
          <br />
          当サイト、ブログを閲覧いただき参考になった方、応援したいと思った方は是非ご支援ください！
        </Text>
      </VStack>
    </Box>
  )
}

export default Coffee
