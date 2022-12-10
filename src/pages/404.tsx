import React from 'react'

import { InferGetStaticPropsType, NextPage } from 'next'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { PageConfig } from 'next'

import Header from '~/components/organisms/Header'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const NotFound: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo noindex={true} nofollow={true} title={'404 Page Not Found | '} />
      <Header />
      <Box
        w="100vw"
        m="auto"
        p={4}
        bg="#000000"
        color="white"
        minHeight="100vh"
      >
        <Heading as="h1" pb="4" textAlign="center" fontSize="2xl">
          404 Page Not Found.
        </Heading>
        <Text textAlign="center">
          <Link href="/">トップページへ戻る</Link>
        </Text>
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

export default NotFound
