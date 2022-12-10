import React, { FC } from 'react'

import { Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

type FooterLinkProps = {
  href: string
  title: string
}

const FooterLink: FC<FooterLinkProps> = (props) => {
  return (
    <Box m="0 auto" pt="14px">
      <Link
        href={props.href}
        passHref //prefetch
        prefetch={false}
      >
        <a>
          <Text>{props.title}</Text>
        </a>
      </Link>
    </Box>
  )
}

export default FooterLink
