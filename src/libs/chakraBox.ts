import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

export const MobileBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const DesktopBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const LoadingImageBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const IconBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const SmBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const MdBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const LgBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const ScaleBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const CloudBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const LFlowerBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const RFlowerBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const Tree = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TaxiBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TextBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const BgBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TitleBox = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const DescBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const DescTextBox = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const FunctionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const FunctionImageBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const ProductBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const ProductImageBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TextLineBox = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
