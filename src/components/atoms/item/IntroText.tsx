import React from 'react'

import { Box, Text, Spacer } from '@chakra-ui/react'

import { TitleBox } from '~/libs/chakraBox'

// declare module 'react' {
//   interface CSSProperties {
//     [key: `--${string}`]: string | number
//   }
// }

export function IntroText() {
  return (
    <>
      {/* <Plx parallaxData={parallaxTitle}> */}
      <TitleBox
        animate={{ y: [50, 0], opacity: [0, 1] }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.8,
          delay: 3,
          type: 'spring',
          stiffness: 200,
        }}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
      >
        <Box
          as="div"
          letterSpacing="1.5px"
          textAlign="center"
          lineHeight={{ base: '2rem', md: '3rem' }}
          color="#FBF73A"
        >
          <Spacer pt={{ base: '10vh', sm: '15vh', md: '10vh', lg: '30vh' }} />
          {/* <Text
            fontSize={{ base: '0.8rem', md: '1.5rem' }}
            fontWeight="600"
            pb={{ base: 6, md: '3rem' }}
            className="intro_author"
          >
            Produced by Kuro32183
          </Text> */}
          <Text
            fontSize={{ base: '3.5rem', sm: '4.5rem', md: '8rem' }}
            fontWeight="800"
            className="intro_text"
          >
            Into <Spacer pt={{ base: '1.5rem', sm: '3rem', md: '4.5rem' }} />
            the <Spacer pt={{ base: '1.5rem', sm: '3rem', md: '4.5rem' }} />
            Wild
          </Text>
        </Box>
      </TitleBox>
      {/* </Plx> */}
    </>
  )
}
