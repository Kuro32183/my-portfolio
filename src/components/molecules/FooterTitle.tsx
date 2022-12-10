import React, { FC } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import FooterImage from '~/components/atoms/FooterImage'

const FooterTitle: FC = () => {
  return (
    <Flex>
      <Text>Powered by </Text>
      <Text ml="0.5rem">
        <FooterImage />
      </Text>
    </Flex>
  )
}

export default FooterTitle
