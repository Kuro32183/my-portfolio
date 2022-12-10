import React, { FC } from 'react'

import { VisuallyHidden, Box } from '@chakra-ui/react'
import { Link as Scroll } from 'react-scroll'

import CircleIcon from '~/components/atoms/CircleIcon'

type CircleProps = {
  to: string
  title: string
}

const CircleBox: FC<CircleProps> = (props) => {
  return (
    <Box cursor="pointer">
      <Scroll href="." to={props.to} smooth={true} duration={600}>
        <VisuallyHidden>{props.title}</VisuallyHidden>
        <Box
          width={{
            base: '5',
            md: '6',
          }}
          height={{
            base: '5',
            md: '6',
          }}
          p={{
            base: '1',
            sm: '0',
          }}
          mt={0}
          transition="top .1s ease-out"
        >
          <CircleIcon />
        </Box>
      </Scroll>
    </Box>
  )
}

export default CircleBox
