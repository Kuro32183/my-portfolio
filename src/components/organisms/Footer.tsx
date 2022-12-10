import { FC } from 'react'

import { Box, Spacer, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import FooterTitle from '~/components/molecules/FooterTitle'
import FooterLinks from '~/components/molecules/FooterLinks'

const Footer: FC = () => {
  return (
    <Box
      borderTop="2px solid #ffffff"
      padding="2rem 2.5rem"
      bg="#000000"
      color="white"
      position="relative"
      fontFamily="monospace"
    >
      <Box zIndex="10">
        <FooterLinks />
      </Box>
      <Flex justifyContent="space-between" pt={4}>
        <Spacer />
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          prefetch={false}
        >
          <a rel="noopener noreferrer">
            <FooterTitle />
          </a>
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
