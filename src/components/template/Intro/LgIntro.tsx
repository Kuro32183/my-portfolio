import React from 'react'

import { Box, Image } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

import { TaxiBox } from '~/libs/chakraBox'
import Smoke from '~/components/atoms/item/Smoke'
import Cloud from '~/components/atoms/item/Cloud'
import Bird from '~/components/atoms/item/Bird'
import LFlower from '~/components/atoms/item/LFlower'
import RFlower from '~/components/atoms/item/RFlower'
import { IntroText } from '~/components/atoms/item/IntroText'
import ScrollDown from '~/components/atoms/item/ScrollDown'
import { LgBox } from '~/libs/chakraBox'

export function LgIntroHide() {
  return <React.Fragment />
}

export function LgIntro() {
  return (
    <LgBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.5 }}
      position="relative"
      h="140vh"
      w="100%"
      bg="#000000"
      zIndex="5"
    >
      <Image
        position="absolute"
        w="full"
        srcSet="/intro/lg/bg.webp"
        src="/intro/lg/bg.png"
        alt="background"
      />
      <Cloud srcSet={'/intro/lg/cloud.webp'} src={'/intro/lg/cloud.png'} />
      <Bird />

      <Image
        position="absolute"
        w="full"
        srcSet="/intro/lg/mountain.webp"
        src="/intro/lg/mountain.png"
        alt="left mountain"
      />
      <IntroText />
      <Tilt
        className="track-on-window"
        tiltMaxAngleX={0}
        tiltMaxAngleY={8}
        tiltReverse={true}
        tiltAngleYInitial={8}
      >
        <Image
          position="absolute"
          minWidth="110%"
          left="-3%"
          srcSet="/intro/lg/blossum.webp"
          src="/intro/lg/blossum.png"
          alt="blossum"
          transform="translateZ(80px)"
        />
        <Image
          position="absolute"
          minWidth="110%"
          right="-2%"
          srcSet="/intro/lg/tree_r_top.webp"
          src="/intro/lg/tree_r_top.png"
          alt="top tree"
          transform="translateZ(80px)"
        />
        <TaxiBox w={{ base: '100%' }} transform="translateZ(40px)">
          <Smoke />
          <Image
            position="absolute"
            w="full"
            srcSet="/intro/lg/taxi.webp"
            src="/intro/lg/taxi.png"
            alt="yellow taxi"
          />
        </TaxiBox>
        <Image
          position="absolute"
          minWidth="110%"
          left="-7%"
          srcSet="/intro/lg/base.webp"
          src="/intro/lg/base.png"
          alt="base"
          transform="translateZ(1px)"
        />
        <Box
          position="absolute"
          minWidth="110%"
          left="-7%"
          transform="translateZ(1px)"
        >
          <LFlower
            srcSet={'/intro/lg/tree_l_flower_yellow.webp'}
            src={'/intro/lg/tree_l_flower_yellow.png'}
          />
          <RFlower
            srcSet={'/intro/lg/tree_r_flower_blue.webp'}
            src={'/intro/lg/tree_r_flower_blue.png'}
          />
        </Box>
        <Image
          position="absolute"
          left="3%"
          maxWidth="120%"
          srcSet="/intro/lg/tree_bottom.webp"
          src="/intro/lg/tree_bottom.png"
          alt="bottom tree"
          transform="translateZ(80px)"
        />
      </Tilt>
      <ScrollDown />
    </LgBox>
  )
}
