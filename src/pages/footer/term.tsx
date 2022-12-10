import React from 'react'

import { Text, Box, Spacer, UnorderedList, ListItem } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PageConfig } from 'next'

import TermTitle from '~/components/atoms/TermTitle'
import Footer from '~/components/organisms/Footer'
import TermSubTitle from '~/components/atoms/TermSubTitle'
import Header from '~/components/organisms/Header'
import MyHead from '~/components/organisms/MyHead'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

const term: NextPage = () => {
  return (
    <>
      <MyHead />
      <Box bg="#000000" color="#ffffff">
        <Header />
        <Box p={{ base: '2rem', md: '4rem', lg: '6rem' }}>
          <TermTitle title={'利用規約'} />
          <Text>
            当サイト運営者(以下「当方」といいます。)が提供する、My
            Portfolio!（以下「本サービス」といいます。）のご利用にあたり、この
            My Portfolio!
            利用規約（以下「本規約」といいます。）のすべての条項をお読みいただき、同意していただく必要がございます。
            <Spacer h="5vh" />
            <TermSubTitle title={'本規約への同意'} />
            ユーザーは、本サービスを利用することによって、本規約に有効かつ取り消し不能な同意をしたものとみなされます。本規約に同意しないユーザーは本サービスをご利用いただけません。
            <Spacer h="5vh" />
            <TermSubTitle title={'禁止事項'} />
            ユーザーは、本サービスのご利用にあたり、以下の行為をしてはなりません。
            <UnorderedList>
              <ListItem>
                法令または公序良俗に違反する行為 犯罪行為に関連する行為
              </ListItem>
              <ListItem>
                運営者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
              </ListItem>
              <ListItem>
                本サービスの運営を妨害する行為、または妨害するおそれのある行為
              </ListItem>
              <ListItem>
                他者の個人情報等を収集または蓄積する行為 他者に成りすます行為
              </ListItem>
              <ListItem>
                本サービスの利用者および運営者、第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為
              </ListItem>
              <ListItem>
                他の利用者および第三者を欺く虚偽の内容を記載する行為
              </ListItem>
              <ListItem>
                スパムとみなされる行為（機械により自動生成された文章の投稿や同一内容の文章を繰り返し投稿する行為など）
              </ListItem>
              <ListItem>その他、運営者が不適切と判断する行為</ListItem>
            </UnorderedList>
            <Spacer h="5vh" />
            <TermSubTitle title={'本サービスの提供の停止'} />
            当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。東方は、この場合にユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
            <UnorderedList>
              <ListItem>
                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </ListItem>
              <ListItem>
                地震、落雷、火災、停電、天災またはウィルスの蔓延などの不可抗力により、本サービスの提供が困難となった場合
              </ListItem>
              <ListItem>
                コンピュータまたは通信回線等が事故により停止した場合
              </ListItem>
              <ListItem>
                本サービスが利用しているクラウドサービスが停止した場合
              </ListItem>
              <ListItem>
                その他、当方が本サービスの提供が困難と判断した場合
              </ListItem>
            </UnorderedList>
            <Spacer h="5vh" />
            <TermSubTitle title={'サービス内容の変更'} />
            当方は、ユーザーに通知することなく、本サービスの内容を変更したり、本サービスの提供を中止、終了することができるものとします。当方は、これによってユーザーに生じた損害について一切の責任を負いません。
            <Spacer h="5vh" />
            <TermSubTitle title={'利用規約の変更'} />
            当方は、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。変更後の本規約は、当方ウェブサイトに掲示された時点から効力を生じるものとします。本規約の変更後、本サービスの利用を継続したユーザーは、変更後の本規約に同意したものとみなします。
            <Spacer h="5vh" />
            <TermSubTitle title={' 通知または連絡'} />
            ユーザーと当方との間の通知または連絡は、当方の定める方法によって行うものとします。
            <Spacer h="5vh" />
            <TermSubTitle title={'権利義務の譲渡および貸与の禁止'} />
            利用者は、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡および貸与することはできません。
            準拠法・裁判管轄
            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、兵庫地方裁判所を第一審の専属的合意管轄裁判所とします。
            2022年11月12日制定
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

export default term
