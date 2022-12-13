import React from 'react'

import { Text } from '@chakra-ui/react'

import FunctionsTitle from '~/components/molecules/FunctionsTitle'

export default function Function1() {
  return (
    <>
      <FunctionsTitle
        title={'当サイトについて'}
        color={{ base: 'white', lg: 'gray' }}
      />
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        自身のポートフォリオサイトと技術ブログを兼ねて公開したいと思い制作に至りました。
      </Text>
      <Text as="p" mt={1} size="base" color={{ base: 'white', lg: 'gray' }}>
        フロントエンドはNext.js(Typescript)とChakraUI、バックエンドはExpress.jsで実装しました。
      </Text>
      <Text as="p" mt={1} size="base" color={{ base: 'white', lg: 'gray' }}>
        制作にあたり、要件定義から運用までのフェーズを実際の業務に沿って行いました。
      </Text>
      <Text as="p" mt={1} size="base" color={{ base: 'white', lg: 'gray' }}>
        主な技術、制作工程は下記をご参照ください。
      </Text>
    </>
  )
}
