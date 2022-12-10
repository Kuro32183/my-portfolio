/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Image, Flex } from '@chakra-ui/react'
import Plx from 'react-plx'

// import Bird from '~/components/atoms/item/Bird'

import Smoke from '~/components/atoms/item/Smoke'
import { IntroText } from '~/components/atoms/item/IntroText'
import Cloud from '~/components/atoms/item/Cloud'
import { DescTextMobile } from '~/components/atoms/item/DescText'
import ScrollDown from '~/components/atoms/item/ScrollDown'
import ImageBox from '~/components/atoms/item/ImageBox'
import { SmBox } from '~/libs/chakraBox'

// declare module 'react' {
//   interface CSSProperties {
//     [key: `--${string}`]: string | number
//   }
// }

export function SmIntroHide() {
  return <React.Fragment />
}

export function SmIntro() {
  const parallaxTree = [
    {
      start: 0,
      end: 700,
      properties: [
        {
          startValue: 1,
          endValue: 3,
          property: 'scale',
        },
      ],
    },
  ]
  const parallaxBox = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1,
          endValue: 1.2,
          property: 'scale',
        },
      ],
    },
  ]
  const parallaxTaxi = [
    {
      start: 0,
      end: 1000,
      properties: [
        {
          startValue: 0,
          endValue: -800,
          property: 'translateX',
        },
      ],
    },
  ]
  const parallaxTitle = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ]
  return (
    <SmBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.1 }}
    >
      <Plx
        parallaxData={parallaxBox}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: 5,
        }}
      >
        <ImageBox
          src={'/intro/sm/bg.png'}
          srcSet={'/intro/sm/bg.webp'}
          alt={'background'}
        />
        <Cloud src={'/intro/sm/cloud.png'} srcSet={'/intro/sm/cloud.webp'} />
        {/* <Bird /> */}
        <ImageBox
          src={'/intro/sm/mountain.png'}
          srcSet={'/intro/sm/mountain.webp'}
          alt={'mountain'}
        />
        <Plx
          parallaxData={parallaxTitle}
          style={{
            position: 'fixed',
            left: 0,
            top: '20vw',
            width: '100%',
          }}
        >
          <IntroText />
        </Plx>
        <ImageBox
          src={'/intro/sm/base.png'}
          srcSet={'/intro/sm/base.webp'}
          alt={'base'}
        />
        <Plx parallaxData={parallaxTaxi}>
          <Flex>
            <Smoke />
            <Image
              style={{
                width: '100%',
                position: 'absolute',
                top: '0%',
                left: '5%',
              }}
              src="/intro/sm/taxi.png"
              srcSet="/intro/sm/taxi.webp"
              alt="taxi"
              decoding="async"
              loading="eager"
              display="inline"
            />
          </Flex>
        </Plx>
        <ScrollDown />
        <Plx
          parallaxData={parallaxTree}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
          }}
        >
          <Image
            w="full"
            h="full"
            src="/intro/sm/tree.png"
            srcSet="/intro/sm/tree.webp"
            alt="tree"
            decoding="async"
            loading="eager"
            display="inline"
          />
        </Plx>
      </Plx>

      <DescTextMobile />
      <div
        style={{
          position: 'relative',
          zIndex: 40,
          paddingTop: '300vh',
          height: '300vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#000',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </div>
    </SmBox>
  )
}
