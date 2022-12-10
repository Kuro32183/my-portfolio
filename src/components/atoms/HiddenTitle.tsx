import React, { FC } from 'react'

import { VisuallyHidden, Text } from '@chakra-ui/react'

type HiddenTitleProps = {
  title: string
}

const HiddenTitle: FC<HiddenTitleProps> = (props) => {
  return (
    <VisuallyHidden>
      <Text as="h2">{props.title}</Text>
    </VisuallyHidden>
  )
}

export default HiddenTitle
