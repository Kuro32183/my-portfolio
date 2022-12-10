import React from 'react'

import { Text, UnorderedList, ListItem } from '@chakra-ui/react'

import FunctionsTitle from '~/components/molecules/FunctionsTitle'
import LinkButton from '~/components/atoms/LinkButton'

export default function Function3() {
  return (
    <>
      <FunctionsTitle title={'設計'} color={{ base: 'white', md: 'white' }} />
      <Text as="p" mt={2} size="base" color="white">
        Next.js(Typescript) + Express.js + Docker
        で開発環境を構築しました。コーディングの期間は２ヶ月です。
      </Text>
      <Text as="p" my={2} size="base" color="white">
        主な機能は、
        <UnorderedList>
          <ListItem>SG (ISR)で静的エクスポート</ListItem>
          <ListItem>Atomic Design (Storybook)</ListItem>
          <ListItem>MicroCMSで制作品やブログ記事を管理</ListItem>
          {/* <ListItem>ユーザー認証で閲覧できる記事を作成</ListItem> */}
          <ListItem>パララックスアニメーション</ListItem>
          <ListItem>Three.jsによる3Dイメージ実装</ListItem>
          <ListItem>Stripeによる決済（投げ銭）機能</ListItem>
        </UnorderedList>
      </Text>
      <Text as="p" mt={4} size="base" color="white">
        ソースコードは
        <LinkButton href="https://github.com/Kuro32183/my-portfolio" />
        をご覧下さい。
      </Text>
    </>
  )
}
