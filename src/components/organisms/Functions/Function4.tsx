import React from 'react'

import { Text } from '@chakra-ui/react'

import FunctionsTitle from '~/components/molecules/FunctionsTitle'
import LinkButton from '~/components/atoms/LinkButton'

export default function Function4() {
  return (
    <>
      <FunctionsTitle
        title={'テスト、運用'}
        color={{ base: 'white', lg: 'gray' }}
      />
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        UIコンポーネントはStorybook、テストツールはJestで行いました。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        フロントはVercel、バックはHerokuへデプロイしました。microCMSにて記事公開時に自動デプロイ、SlackへのWebhookを設定しています。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        本番環境にあたりサイトマップの作成、SEO、Googleアナリティクスの実装を行い、利用状況を考慮して取捨選択しました。
      </Text>
      <Text as="p" mt={2} size="base" color={{ base: 'white', lg: 'gray' }}>
        今後も
        <LinkButton href="https://github.com/Kuro32183/my-portfolio" />
        の記事に当サイトについて詳しく記していきます。
      </Text>
    </>
  )
}
