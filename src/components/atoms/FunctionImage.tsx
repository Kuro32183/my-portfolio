import React, { FC } from 'react'

import { Image } from '@chakra-ui/react'

type FunctionImageProps = {
  src: string
  srcSet: string
  alt: string
}

const FunctionImage: FC<FunctionImageProps> = (props) => {
  return (
    <Image
      src={props.src}
      srcSet={props.srcSet}
      alt={props.alt}
      objectFit="contain"
      style={{ width: 350, height: 500 }}
      loading="lazy"
      decoding="async"
      display="inline"
    />
  )
}

export default FunctionImage
