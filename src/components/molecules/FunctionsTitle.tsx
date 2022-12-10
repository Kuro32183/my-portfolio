import React, { FC } from 'react'

import { Text } from '@chakra-ui/react'

type TitleProps = {
  title: string
  color: any
}

const FunctionsTitle: FC<TitleProps> = (props) => {
  return (
    <Text
      as="h3"
      color={props.color}
      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight="bold"
    >
      {props.title}
    </Text>
  )
}

export default FunctionsTitle
