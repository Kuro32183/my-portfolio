/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Image } from '@chakra-ui/react'

import Coffee from '~/components/molecules/Coffee'
import { FunctionBox, FunctionImageBox } from '~/libs/chakraBox'

import Function1 from '../organisms/Functions/Function1'
import Function2 from '../organisms/Functions/Function2'
import Function3 from '../organisms/Functions/Function3'
import Function4 from '../organisms/Functions/Function4'

export function FunctionsDesktopHide() {
  return <React.Fragment />
}

export function FunctionsDesktop() {
  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  const { scrollY } = useScroll()
  const screenHeight = 2550
  const opacity0 = useTransform(
    scrollY,
    [screenHeight, screenHeight + 500],
    [1, 0]
  )
  const opacity1 = useTransform(
    scrollY,
    [screenHeight, screenHeight + 500, screenHeight + 750, screenHeight + 1000],
    [0, 1, 1, 0]
  )
  const opacity2 = useTransform(
    scrollY,
    [
      screenHeight + 500,
      screenHeight + 750,
      screenHeight + 1250,
      screenHeight + 1500,
    ],
    [0, 1, 1, 0]
  )
  const opacity3 = useTransform(
    scrollY,
    [
      screenHeight + 750,
      screenHeight + 1000,
      screenHeight + 1750,
      screenHeight + 2000,
    ],
    [0, 1, 1, 0]
  )
  const opacity4 = useTransform(
    scrollY,
    [
      screenHeight + 1000,
      screenHeight + 1250,
      screenHeight + 2250,
      screenHeight + 2500,
    ],
    [0, 1, 1, 0]
  )
  const opacity5 = useTransform(
    scrollY,
    [
      screenHeight + 1250,
      screenHeight + 1500,
      screenHeight + 2250,
      screenHeight + 2500,
    ],
    [0, 1, 1, 0]
  )

  const yTrans1_1 = useTransform(
    scrollY,
    [screenHeight, screenHeight + 500],
    [2000, 0]
  )
  const yTrans1_2 = useTransform(
    scrollY,
    [screenHeight, screenHeight + 500],
    [-2000, 0]
  )

  const yTrans2_1 = useTransform(
    scrollY,
    [screenHeight + 500, screenHeight + 1000],
    [-2000, 0]
  )
  const yTrans2_2 = useTransform(
    scrollY,
    [screenHeight + 500, screenHeight + 1000],
    [2000, 0]
  )

  const yTrans3_1 = useTransform(
    scrollY,
    [screenHeight + 1000, screenHeight + 1500],
    [2000, 0]
  )
  const yTrans3_2 = useTransform(
    scrollY,
    [screenHeight + 1000, screenHeight + 1500],
    [-2000, 0]
  )

  const yTrans4_1 = useTransform(
    scrollY,
    [screenHeight + 1500, screenHeight + 2000],
    [-2000, 0]
  )
  const yTrans4_2 = useTransform(
    scrollY,
    [screenHeight + 1500, screenHeight + 2000],
    [2000, 0]
  )

  return (
    <Box as="div" bg="transparent" className="bg-transparent">
      <Box as="div" position="relative" w="full" style={{ height: 3400 }}>
        <Box
          as="div"
          bg="white"
          opacity="0.8"
          position="sticky"
          w="100vw"
          h="100vh"
          top="0"
          zIndex="10"
        >
          {/* Function1 Image */}
          <FunctionBox
            position="absolute"
            top="0"
            right="0"
            w="50%"
            h="100vh"
            initial={{ opacity: 1 }}
            style={{ opacity: opacity0, zIndex: 31 }}
          >
            <Flex
              as="div"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                as="div"
                ref={ref}
                px={20}
                flexDirection="column"
                className="px-20 flex flex-col"
              >
                <AnimatePresence>
                  {inView && (
                    <FunctionImageBox
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      // @ts-ignore no problem in operation, although type error appears.
                      transition={{ duration: 1 }}
                      src="/images/rough.png"
                      srcSet="/images/rough.webp"
                      alt="rough"
                      objectFit="contain"
                      loading="lazy"
                      style={{ width: 400, height: 550 }}
                    />
                  )}
                </AnimatePresence>
              </Box>
            </Flex>
          </FunctionBox>
          {/* Function1 Text */}
          <motion.div
            initial={{ opacity: 1 }}
            style={{ opacity: opacity0, zIndex: 30 }}
            className="function_box_left"
          >
            <Flex
              as="div"
              flexDirection="row"
              h="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Flex as="div" px={20} flexDirection="column">
                <Function1 />
              </Flex>
            </Flex>
          </motion.div>

          {/* Function2 Image */}
          <motion.div
            initial={{ y: -2000 }}
            style={{ y: yTrans1_1, opacity: opacity1, zIndex: 32 }}
            className="function_box_left"
          >
            <Flex
              as="div"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
              bg="black"
            >
              <Box as="div">
                {inView && (
                  <Image
                    src="/images/design.png"
                    srcSet="/images/design.webp"
                    alt="design"
                    className="object-contain"
                    loading="lazy"
                    style={{ width: 400, height: 350 }}
                  />
                )}
              </Box>
            </Flex>
          </motion.div>
          {/* Function2 Text */}
          <motion.div
            initial={{ y: 2000, opacity: 0 }}
            style={{ y: yTrans1_2, opacity: opacity1, zIndex: 32 }}
            className="function_box_right"
          >
            <Flex
              as="div"
              bg="white"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
            >
              <Box px={20}>
                <Function2 />
              </Box>
            </Flex>
          </motion.div>

          {/* Function3 Text */}
          <motion.div
            initial={{ y: 2000 }}
            style={{ y: yTrans2_1, opacity: opacity2, zIndex: 33 }}
            className="function_box_left"
          >
            <Flex
              as="div"
              bg="white"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
            >
              <Box as="div">
                {inView && (
                  <Image
                    src="/images/flow_chart.jpg"
                    srcSet="/images/flow_chart.webp"
                    alt="flow chart"
                    loading="lazy"
                    objectFit="contain"
                    style={{ width: 400, height: 550 }}
                  />
                )}
              </Box>
            </Flex>
          </motion.div>
          {/* Function3 Image */}
          <motion.div
            initial={{ y: -2000, opacity: 0 }}
            style={{ y: yTrans2_2, opacity: opacity2, zIndex: 33 }}
            className="function_box_right"
          >
            <Flex
              as="div"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
              bg="black"
            >
              <Box as="div" px={20}>
                <Function3 />
              </Box>
            </Flex>
          </motion.div>

          {/* Function4 Text */}
          <motion.div
            initial={{ y: -2000 }}
            style={{ y: yTrans3_1, opacity: opacity3, zIndex: 34 }}
            className="function_box_left"
          >
            <Flex
              as="div"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
              bg="black"
            >
              <Box as="div">
                {inView && (
                  <Image
                    src="/images/test.png"
                    srcSet="/images/test.webp"
                    alt="test"
                    loading="lazy"
                    className="object-contain"
                    style={{ width: 400, height: 550 }}
                  />
                )}
              </Box>
            </Flex>
          </motion.div>
          {/* Function4 Image */}
          <motion.div
            initial={{ y: 2000, opacity: 0 }}
            style={{ y: yTrans3_2, opacity: opacity3, zIndex: 34 }}
            className="function_box_right"
          >
            <Flex
              as="div"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
            >
              <Box as="div" px={20}>
                <Function4 />
              </Box>
            </Flex>
          </motion.div>

          {/* Function5 Text */}
          <motion.div
            initial={{ y: 2000 }}
            style={{ y: yTrans4_1, opacity: opacity4, zIndex: 34 }}
            className="function_box_left"
          >
            <Flex
              bg="white"
              flexDirection="row"
              h="full"
              justifyContent="center"
              alignItems="center"
            >
              <Box as="div">
                {inView && (
                  <Image
                    src="/images/stripe.png"
                    srcSet="/images/stripe.webp"
                    alt="stripe"
                    loading="lazy"
                    objectFit="contain"
                    style={{ width: 400, height: 550 }}
                  />
                )}
              </Box>
            </Flex>
          </motion.div>
          {/* Function5 Image */}
          <motion.div
            initial={{ y: -2000, opacity: 0 }}
            style={{ y: yTrans4_2, opacity: opacity5, zIndex: 34 }}
            className="function_box_right"
          >
            <Flex
              as="div"
              h="full"
              justifyContent="center"
              alignItems="center"
              bg="black"
            >
              <Box as="div">
                <Coffee />
              </Box>
            </Flex>
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}
