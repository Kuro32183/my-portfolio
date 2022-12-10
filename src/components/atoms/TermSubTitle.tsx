import React, { FC } from 'react'

import { Text } from '@chakra-ui/react'

type TermTitleProps = {
  title: string
}

const TermSubTitle: FC<TermTitleProps> = (props) => {
  return (
    <Text
      fontSize={{ base: '1rem', md: '1.2rem' }}
      fontWeight="bold"
      as="h2"
      color="#ffffff"
      pb="0.5rem"
    >
      {props.title}
    </Text>
  )
}

export default TermSubTitle
