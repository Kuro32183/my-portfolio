import React, { FC } from 'react'

import { VStack } from '@chakra-ui/react'

import CircleBox from '~/components/molecules/CircleBox'
import { IconBox } from '~/libs/chakraBox'

const RightSideBar: FC = () => {
  return (
    <>
      <IconBox
        position="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ duration: 0.5 }}
      >
        <VStack as="div" position="fixed" top="250" right="5" zIndex="50">
          <CircleBox to={'intro'} title={'Intro Scroll'} />
          <CircleBox to={'about'} title={'About Scroll'} />
          <CircleBox to={'work'} title={'Work Scroll'} />
          <CircleBox to={'products'} title={'Work Scroll'} />
          <CircleBox to={'blogs'} title={'Work Scroll'} />
        </VStack>
      </IconBox>
    </>
  )
}

export default RightSideBar
