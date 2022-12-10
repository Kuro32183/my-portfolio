import React from 'react'

import { Flex } from '@chakra-ui/react'

import FooterLink from '~/components/atoms/FooterLink'
import ContactLink from '~/components/atoms/ContactLink'

const FooterLinks = () => {
  return (
    <Flex flexDirection="column" zIndex="10" fontSize="0.8rem">
      <ContactLink />
      <FooterLink title={'利用規約'} href={'/footer/term'} />
      <FooterLink
        title={'プライバシーポリシー'}
        href={'/footer/privacy_policy'}
      />
      <FooterLink
        title={'特定商取引法に基づく表記'}
        href={'/footer/specific_commercial_transaction'}
      />
    </Flex>
  )
}

export default FooterLinks
