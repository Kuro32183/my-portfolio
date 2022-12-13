import React, { ReactNode } from 'react'

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

import LeftSideBar from '~/components/organisms/LeftSideBar'
import RightSideBar from '~/components/organisms/RightSideBar'
import MyHead from '~/components/organisms/MyHead'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MyHead />
      <Grid minH="100vh" position="relative">
        <Box background="#000" color="white" zIndex="0">
          <Flex position="relative">
            <GridItem>
              <LeftSideBar />
            </GridItem>
            <GridItem gridArea="main">
              <main>{children}</main>
            </GridItem>
            <GridItem>
              <RightSideBar />
            </GridItem>
          </Flex>
        </Box>
      </Grid>
    </>
  )
}

export default Layout
