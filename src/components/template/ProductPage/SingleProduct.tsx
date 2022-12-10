/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react'

// import Image from 'next/image'
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
  AspectRatio,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import type { ProductListDetail } from 'types/product'
import { date } from 'utils/date'
import Header from '~/components/organisms/Header'
import Footer from '~/components/organisms/Footer'
import CheckoutButton from '~/components/atoms/CheckoutButton'

type Props = {
  data: ProductListDetail
}

const SingleProduct: FC<Props> = ({ data }) => {
  const { thumbnail, title, body, publishedAt } = data
  return (
    <Box as="div" bg="#000000" color="#ffffff">
      <Header />
      {thumbnail !== undefined && (
        <AspectRatio ratio={1300 / 730} maxWidth="700px" m="0rem auto">
          <motion.img layoutId={thumbnail.url} src={thumbnail.url} alt="" />
        </AspectRatio>
      )}
      <Box pt={10} px={{ base: '2rem', md: '2rem', lg: '10rem' }}>
        <Heading
          as="h1"
          fontSize="2rem"
          fontWeight="300"
          letterSpacing="2px"
          py={4}
        >
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
          <Text fontSize="base" pl={2}>
            <time dateTime={date(publishedAt, 'YYYY-MM-DD')}>
              {date(publishedAt, 'YYYY年M月D日')}
            </time>
          </Text>
        </Flex>
        <Spacer pt={8} />
        <Box
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

export default SingleProduct
