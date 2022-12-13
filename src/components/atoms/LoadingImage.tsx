import React, { useRef } from 'react'

import { LoadingImageBox } from '~/libs/chakraBox'

const LoadingImage = () => {
  const loading = useRef(null)
  return (
    <LoadingImageBox
      ref={loading}
      animate={{ rotate: [0, 180, 0, 360] }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        repeat: Infinity,
        repeatDelay: 0,
        duration: 3,
        type: 'tween',
      }}
      src="/profile.png"
      srcSet="/profile.webp"
      alt="loading image"
      mr="2rem"
      w="full"
      h="full"
    />
  )
}

export default LoadingImage
