/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react'

// import Image from 'next/image'
import { Box, Flex, Heading, Spacer, Text, Image } from '@chakra-ui/react'

import type { BlogListDetail } from 'types'
import { date } from 'utils/date'
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import CheckoutButton from '~/components/atoms/CheckoutButton'

type Props = {
  data: BlogListDetail
}

const SingleBlog: FC<Props> = ({ data }) => {
  const { thumbnail, title, body, publishedAt } = data
  return (
    <Box as="div" bg="#000000" color="#ffffff">
      <Header />
      <Box pt={20} px={{ base: 4, md: '5rem', lg: '10rem' }}>
        {thumbnail !== undefined && (
          <Image
            src={thumbnail.url}
            width={thumbnail.width}
            height={thumbnail.height}
            alt=""
          />
        )}
        <Heading as="h1" fontWeight="300" letterSpacing="2px" py={6}>
          {title}
        </Heading>
        <Flex>
          <Image
            src="/icons/created-at.svg"
            alt=""
            pt="0.4rem"
            width="1.3rem"
            height="1.3rem"
          ></Image>
          <Text fontSize="sm" pl={2}>
            <time dateTime={date(publishedAt, 'YYYY-MM-DD')}>
              {date(publishedAt, 'YYYY年M月D日')}
            </time>
          </Text>
        </Flex>
        <Spacer pt={2} />
        <Box
          fontFamily="nijimi"
          as="div"
          dangerouslySetInnerHTML={{
            __html: body || '',
          }}
        />
      </Box>
      <Spacer h="1rem" />
      <CheckoutButton />
      <Spacer h="1rem" />
      <Footer />
    </Box>
  )
}

export default SingleBlog
