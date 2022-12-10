/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box } from '@chakra-ui/react'

import Coffee from '~/components/molecules/Coffee'
import TextSpacer from '~/components/atoms/TextSpacer'
import FunctionImage from '~/components/atoms/FunctionImage'

import Function1 from '../organisms/Functions/Function1'
import Function2 from '../organisms/Functions/Function2'
import Function3 from '../organisms/Functions/Function3'
import Function4 from '../organisms/Functions/Function4'

const initialAnimation = {
  y: 150,
  opacity: 0,
}

const startAnimation = {
  y: 0,
  opacity: 1,
}

export function HomeFunctionsMobileHide() {
  return <React.Fragment />
}

const Component1 = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('start')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={{
        init: initialAnimation,
        start: startAnimation,
      }}
      initial="init"
      transition={{ duration: 1 }}
      className="function_mobile"
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        my={2}
        h="100%"
        justifyContent="center"
        w={{ base: '70%', md: '100%' }}
        m="0 auto"
      >
        {/* <Image
          width="350"
          height="500"
          objectFit="contain"
          src={'/images/rough.png'}
          alt={'rough'}
          quality={75}
          priority={false}
          loading={'lazy'}
          unoptimized={true}
        /> */}
        <FunctionImage
          src={'/images/rough.png'}
          srcSet={'/images/rough.webp'}
          alt={'rough'}
        />
      </Box>
      <Box as="div" px={{ base: 14, md: 20 }}>
        <Function1 />
      </Box>
    </motion.div>
  )
}

const Component2 = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  React.useEffect(() => {
    if (inView) {
      controls.start('start')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={{
        init: initialAnimation,
        start: startAnimation,
      }}
      initial="init"
      transition={{ duration: 1 }}
      className="function_mobile"
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        my={2}
        h="100%"
        justifyContent="center"
        w="70%"
        m="0 auto"
      >
        <FunctionImage
          src={'/images/design.png'}
          srcSet={'/images/design.webp'}
          alt={'design'}
        />
      </Box>
      <Box as="div" px={{ base: 14, md: 20 }}>
        <Function2 />
      </Box>
    </motion.div>
  )
}

const Component3 = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  React.useEffect(() => {
    if (inView) {
      controls.start('start')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={{
        init: initialAnimation,
        start: startAnimation,
      }}
      initial="init"
      transition={{ duration: 1 }}
      className="function_mobile"
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        my={2}
        h="100%"
        justifyContent="center"
        w="70%"
        m="0 auto"
      >
        <FunctionImage
          src={'/images/flow_chart.jpg'}
          srcSet={'/images/flow_chart.webp'}
          alt={'flow chart'}
        />
      </Box>
      <Box as="div" px={{ base: 14, md: 20 }}>
        <Function3 />
      </Box>
    </motion.div>
  )
}

const Component4 = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  React.useEffect(() => {
    if (inView) {
      controls.start('start')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={{
        init: initialAnimation,
        start: startAnimation,
      }}
      initial="init"
      transition={{ duration: 1 }}
      className="function_mobile"
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        my={2}
        h="100%"
        justifyContent="center"
        w="70%"
        m="0 auto"
      >
        <FunctionImage
          src={'/images/test.png'}
          srcSet={'/images/test.webp'}
          alt={'flow chart'}
        />
      </Box>
      <Box as="div" px={{ base: 14, md: 20 }}>
        <Function4 />
      </Box>
    </motion.div>
  )
}

export function HomeFunctionsMobile() {
  return (
    <Box>
      <Component1 />
      <TextSpacer />
      <Component2 />
      <TextSpacer />
      <Component3 />
      <TextSpacer />
      <Component4 />
      <TextSpacer />
      <Coffee />
    </Box>
  )
}
