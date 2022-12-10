import React, { FC } from 'react'

import { VisuallyHidden, Box, Link, Image } from '@chakra-ui/react'

type IconProps = {
  link: string
  title: string
  src: string
  alt: string
}

const SocialIcon: FC<IconProps> = (props) => {
  return (
    <>
      <Box>
        <Link href={props.link} isExternal>
          <VisuallyHidden>{props.title}</VisuallyHidden>
          <Box
            width={{
              base: '5',
              md: '5',
            }}
            height={{
              base: '5',
              md: '5',
            }}
            p={{
              base: '1',
              sm: '0',
            }}
            mt={0}
            sx={{
              'svg:hover': { fill: '#ffffff' },
              'svg:active': { fill: '#ffffff' },
            }}
            _hover={{ opacity: '0.6' }}
            _active={{ border: '2px solid black' }}
            transition=".3s"
          >
            <Image
              src={props.src}
              width="2rem"
              height="2rem"
              alt={props.alt}
              loading="eager"
              decoding="async"
              display="inline"
            />
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default SocialIcon
