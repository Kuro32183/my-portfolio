import React, { FC } from 'react'

import { Icon } from '@chakra-ui/icons'

const CircleIcon: FC = (props) => {
  return (
    <Icon
      viewBox="0 0 200 200"
      position="absolute"
      borderRadius="full"
      transition=".3s"
      _hover={{ opacity: '0.6' }}
      _active={{ border: '2px solid black' }}
      {...props}
    >
      <path
        // eslint-disable-next-line react/no-unknown-property
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  )
}

export default CircleIcon
