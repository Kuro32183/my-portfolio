import React, { FC } from 'react'

import { Box, Text, Button } from '@chakra-ui/react'

const CheckoutButton: FC = () => {
  return (
    <form action="/api/checkout/checkout_session" method="POST">
      <Box textAlign="center">
        <Button
          p={{ base: 4, md: 6 }}
          type="submit"
          role="link"
          zIndex="30"
          fontSize={{ base: '1rem', md: '1.3rem' }}
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
          // bg="blue.400"
          bg="green"
          color="#ffffff"
          _hover={{ bg: 'blue.200' }}
          transition="ease .2s"
        >
          <Text color="#ffffff">&#9749; &nbsp;コーヒーを淹れてください！</Text>
        </Button>
      </Box>
    </form>
  )
}

export default CheckoutButton
