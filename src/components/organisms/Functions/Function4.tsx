import React from 'react'

import { Text } from '@chakra-ui/react'

import FunctionsTitle from '~/components/molecules/FunctionsTitle'

export default function Function4() {
  return (
    <>
      <FunctionsTitle
        title={'テスト、運用'}
        color={{ base: 'white', lg: 'gray' }}
      />
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        UIコンポーネントはStorybook、テストツールはJestで環境構築しました。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        フロントはVercel、バックはHerokuへデプロイしました。
        microCMSにて記事公開時に自動デプロイ、SlackへのWebhookを設定しています。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        本番環境にあたりサイトマップの作成、SEO、Googleアナリティクスの実装を行いPage
        Speed Insight より高得点が出せました。
      </Text>
    </>
  )
}
