import React, { FC } from 'react'

import { Button } from '@chakra-ui/react'

type LinkButtonProps = {
  href: string
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <Button
      href={props.href}
      bg="blue.400"
      // bg="green"
      color="white"
      _hover={{ bg: 'blue.200' }}
      textDecoration="none"
      as="a"
      mx={2}
    >
      ใใกใ
    </Button>
  )
}

export default LinkButton
