import React from 'react'

import { Text, Box, Spacer, UnorderedList, ListItem } from '@chakra-ui/react'
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

const privacy_policy: NextPage = () => {
  return (
    <>
      <MyHead />
      <Box bg="#000000" color="#ffffff">
        <Header />
        <Box p={{ base: '2rem', md: '4rem', lg: '6rem' }}>
          <TermTitle title={'プライバシーポリシー'} />
          <Text>
            <Spacer h="5vh" />
            <TermSubTitle title={'お客様から取得する情報'} />
            本サービスは、お客様から以下の情報を取得します。
            <UnorderedList>
              <ListItem>メールアドレス</ListItem>
              <ListItem>
                本サービスの滞在時間、入力履歴、購買履歴等のお客様の行動履歴
              </ListItem>
            </UnorderedList>
            <Spacer h="5vh" />
            <TermSubTitle title={'お客様の情報を利用する目的'} />
            <UnorderedList>
              <ListItem>
                本サービスにおけるお客様の行動履歴を分析し、本サービスの維持改善に役立てるため
              </ListItem>
              <ListItem>お客様からのお問合せに対応するため</ListItem>
              <ListItem>
                本サービスの規約や法令に違反する行為に対応するため
              </ListItem>
              <ListItem>
                以上の他、本サービスの提供、維持、保護及び改善のため
              </ListItem>
            </UnorderedList>
            <Spacer h="5vh" />
            <TermSubTitle title={'安全管理のために講じた措置'} />
            当方が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問合せ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
            <Spacer h="5vh" />
            <TermSubTitle title={'第三者提供'} />
            当方は、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものについては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
            但し、次の場合は除きます。
            <UnorderedList>
              <ListItem>個人データの取り扱いを外部に委託する場合</ListItem>
              <ListItem>本サービスが買収された場合</ListItem>
              <ListItem>
                事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）
              </ListItem>
              <ListItem>
                その他、法律によって合法的に第三者提供が許されている場合
              </ListItem>
            </UnorderedList>
            <Spacer h="5vh" />
            <TermSubTitle title={'アクセス解析ツール'} />
            当方は、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定する者ではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。
            <br />
            <Text color="blue.400" _hover={{ color: 'blue.200' }}>
              <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/">
                <a> Google アナリティクス利用規約</a>
              </Link>
            </Text>
            <Spacer h="5vh" />
            <TermSubTitle title={'プライバシーポリシーの変更'} />
            当方は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知又は通知します。
            <Spacer h="5vh" />
            <TermSubTitle title={'お問い合わせ'} />
            お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。
            <br />
            <Text color="blue.400" _hover={{ color: 'blue.200' }}>
              <Link href="mailto:takumi32183@gmail.com">
                <a> takumi32183@gmail.com</a>
              </Link>
            </Text>
            <br />
            この場合、必ず、運転免許証のご提示等当方が指定する方法により、ご本人からご請求であることの確認をさせていただきます。なお、情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。
            <Spacer h="5vh" />
            <TermSubTitle title={'事業者名'} />
            Kuro32183
            <Spacer h="5vh" />
            <TermSubTitle title={'事業者の住所'} />
            兵庫県たつの市御津町岩見34-9 <br />
            2022年06月27日
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

export default privacy_policy
