import React, { FC } from 'react'

// import Image from 'next/image'
import { Image } from '@chakra-ui/react'

const FooterImage: FC = () => {
  return (
    <Image
      src="/vercel.png"
      alt="Vercel Logo"
      w="4rem"
      h="1.3rem"
      pt="0.4rem"
      loading="lazy"
      decoding="async"
      display="inline"
    />
  )
}

export default FooterImage
