import React from 'react'

import { Text, Box, Spacer } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { PageConfig } from 'next'

import TermTitle from '~/components/atoms/TermTitle'
import Footer from '~/components/organisms/Footer'
import TermSubTitle from '~/components/atoms/TermSubTitle'
import Header from '~/components/organisms/Header'
import MyHead from '~/components/organisms/MyHead'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

const specific_commercial_transaction: NextPage = () => {
  return (
    <>
      <MyHead />
      <Box bg="#000000" color="#ffffff">
        <Header />
        <Box p={{ base: '2rem', md: '4rem', lg: '6rem' }}>
          <TermTitle title={'特定商取引に基づく表記'} />
          <Text>
            <Spacer h="5vh" />
            <TermSubTitle title={'事業者'} />
            Kuro32183
            <Spacer h="5vh" />
            <TermSubTitle title={'事業者の所在'} />
            〒671-1331 兵庫県たつの市御津町岩見34-9 <br />
            ※電話番号開示を希望される場合はご連絡いただければ遅延なく開示いたします。
            <br />
            ※お問い合わせは下記のメールアドレスもしくはお問合せフォームからのみ受け付けています。
            <Spacer h="5vh" />
            <TermSubTitle title={'お問合せ先'} />
            <Text color="blue.400" _hover={{ color: 'blue.200' }}>
              <Link href="mailto:takumi32183@gmail.com">
                <a> takumi32183@gmail.com</a>
              </Link>
            </Text>
            <Spacer h="5vh" />
            <TermSubTitle title={'販売価格等'} />
            商品の価格は消費税、以下の手数料を含む価格で表示されています。
            <br />
            決済手数料:商品販売対価の3.6%
            <Spacer h="5vh" />
            <TermSubTitle title={'お支払い方法'} />
            クレジットカード(Visa / Master / American Express ), Apple pay,
            Google pay <br />
            支払い時期：商品の購入時に決済させていただきます。ご請求日はご利用のクレジットカードの締め日や契約内容により異なります。ご利用のカード会社までお問合せください。
            <Spacer h="5vh" />
            <TermSubTitle title={'個人情報の取り扱いについて'} />
            <Link href="/footer/privacy_policy">
              <a>プライバシーポリシー</a>
            </Link>
            をご参照ください。
            <Spacer h="5vh" />
            <TermSubTitle title={'商品の引き渡し時期'} />
            商品の性質上、引き渡しはありません。
            <Spacer h="5vh" />
            <TermSubTitle title={'キャンセルについて'} />
            購入の申込の撤回、変更、払い戻しには一切応じられません。間違えて購入した場合でも、返金は致しかねますので、予めご了承ください。
            <Spacer h="5vh" />
          </Text>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 300,
  }
}

export default specific_commercial_transaction
