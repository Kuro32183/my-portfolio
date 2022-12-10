import React, { FC } from 'react'

import { VStack, Text } from '@chakra-ui/react'

import SocialIcon from '~/components/atoms/SocialIcon'
import { IconBox } from '~/libs/chakraBox'

const LeftSideBar: FC = () => {
  return (
    <>
      <IconBox
        position="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ duration: 0.5 }}
      >
        <VStack as="div" position="fixed" top="250" left="5" zIndex="50">
          <SocialIcon
            link={`https://github.com/Kuro32183`}
            title={'Github'}
            src={`/icons/accounts/github.svg`}
            alt={'github'}
          />
          <SocialIcon
            link={`mailto:obon32town@gmail.com`}
            title={'Email'}
            src={`/icons/accounts/email.svg`}
            alt={'email'}
          />
          <SocialIcon
            link={`/`}
            title={'Twitter'}
            src={`/icons/accounts/twitter.svg`}
            alt={'twitter'}
          />
          <SocialIcon
            link={`/`}
            title={'Facebook'}
            src={`/icons/accounts/facebook.svg`}
            alt={'facebook'}
          />
          <Text borderRight="1px solid #ffffff" width="50" height="50"></Text>
        </VStack>
      </IconBox>
    </>
  )
}

export default LeftSideBar
