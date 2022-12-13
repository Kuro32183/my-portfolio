import React, { FC } from 'react'

import { chakra, shouldForwardProp, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type ChakraProps = {
  chakraProps?: ChakraProps
  title: string
  src: string
  alt: string
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const SectionTitle: FC<ChakraProps> = (props) => {
  const { chakraProps } = props
  return (
    <ChakraBox
      {...chakraProps}
      animate={{ y: [-5, 5, -5] }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        repeat: Infinity,
        repeatDelay: 0,
        duration: 1,
        type: 'tween',
      }}
      display="flex"
      justifyContent="center"
      pb={8}
    >
      <Image
        src={props.src}
        width="50px"
        height="50px"
        alt={props.alt}
        loading="lazy"
        decoding="async"
        display="inline"
        pr={2}
      />
      <Text
        as="h2"
        fontSize="1.8rem"
        fontWeight="300"
        letterSpacing="2px"
        fontFamily="nijimi"
      >
        {props.title}
      </Text>
    </ChakraBox>
  )
}

export default SectionTitle
