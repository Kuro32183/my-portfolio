import React from 'react'

import { Text } from '@chakra-ui/react'

import FunctionsTitle from '~/components/molecules/FunctionsTitle'
import LinkButton from '~/components/atoms/LinkButton'

export default function Function2() {
  return (
    <>
      <FunctionsTitle
        title={'デザイン'}
        color={{ base: 'white', lg: 'gray' }}
      />
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        ワイヤーフレーム、試作品はFigmaで制作しました。デザイン制作期間は２週間です。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        主なページはTop、制作品、ブログ記事の3Pになります。
        デスクトップ用、モバイル用とレスポンシブデザインで設計しました。ポートフォリオサイトとしてストーリーが伝えられるように設計しました。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        Figmaデータは
        <LinkButton href="https://www.figma.com/community/file/1168545884388935778" />
        をご覧下さい。
      </Text>
    </>
  )
}
