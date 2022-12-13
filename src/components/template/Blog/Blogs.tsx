import React from 'react'

import { Flex, Heading, Text, Spacer, Image, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

import { Blog } from 'types'
import { date } from '~/utils/date'
const Blogs = (props: { blog: Blog }) => {
  const { blog } = props
  return (
    <ListItem
      px={4}
      py={4}
      as="article"
      position="relative"
      maxWidth={{ base: '350px', sm: '450px', lg: '450px' }}
      width={{ base: '100%', md: '100%', lg: '450px' }}
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      bg="#000000"
      textAlign="left"
      fontSize="xl"
      transition="ease 0.5s"
      mb={{ base: 0, sm: '2rem' }}
      mr={{ base: '0' }}
      key={blog.id}
      role="listitem"
      fontFamily="nijimi"
    >
      <Link
        href={`/blog/${blog.private ? 'private' : 'public'}/${blog.id}`} //prefetch
        prefetch={false}
      >
        <a>
          <Flex justifyContent="space-between">
            <Heading
              as="h3"
              fontSize={{ base: '0.9rem', md: '1.1rem' }}
              pr="3"
              letterSpacing="2px"
              fontFamily="nijimi"
            >
              {blog.title}
            </Heading>

            <Text fontSize="sm" display={{ base: 'none', md: 'flex' }}>
              {' '}
              <Image
                src="/icons/created-at.svg"
                alt=""
                pt={1.5}
                h="5"
                w="5"
                loading="lazy"
                decoding="async"
                display="inline"
              ></Image>
              &nbsp;
              <time dateTime={date(blog.publishedAt, 'YYYY-MM-DD')}>
                {date(blog.publishedAt, 'YYYY年M月D日')}
              </time>
            </Text>
          </Flex>

          <Spacer />
          <Text
            fontSize={{ base: '0.7rem', md: '0.8rem' }}
            py={2}
            noOfLines={3}
            lineHeight="6"
          >
            {blog.description}
          </Text>
        </a>
      </Link>
    </ListItem>
  )
}

export default Blogs
