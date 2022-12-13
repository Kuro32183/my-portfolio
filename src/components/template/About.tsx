/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import AboutIcon from '~/components/molecules/AboutIcon'
import LinkButton from '~/components/atoms/LinkButton'

const About: FC = () => {
  return (
    <>
      <Box
        as="div"
        margin="0 auto"
        textAlign="center"
        position="relative"
        background="transparent"
        fontFamily="nijimi"
      >
        <AboutIcon />
        <Box
          letterSpacing="1.2px"
          px={{ base: 14, md: 20, lg: '15rem' }}
          textAlign="left"
          lineHeight="2rem"
        >
          <Text as="p">
            2017年から副業としてグラフィックデザインを中心としたWebデザイン業務(HTML,
            CSS)を行なった後、
            2020年にフリーランスでフロントエンドエンジニアに転身。
          </Text>
          <Text as="p">
            現在は新規でのLP制作業務を行いながら、既存サイトの機能追加等を主に2年半行なっています。
          </Text>

          <Text as="p">
            ご連絡の際は
            <LinkButton href="https://docs.google.com/forms/d/1ekUjjSS2cRb095ltZIDGIN1kWVlAUAbjbFmXr9Y8O8o/viewform" />
            のフォームからお願いいたします。
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default About
