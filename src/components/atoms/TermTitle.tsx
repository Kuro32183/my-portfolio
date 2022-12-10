import React, { FC } from 'react'

import { Text } from '@chakra-ui/react'

type TermTitleProps = {
  title: string
}

const TermTitle: FC<TermTitleProps> = (props) => {
  return (
    <Text
      fontSize={{ base: '1.5rem', md: '1.8rem' }}
      fontWeight="600"
      as="h1"
      color="#ffffff"
    >
      {props.title}
    </Text>
  )
}

export default TermTitle
